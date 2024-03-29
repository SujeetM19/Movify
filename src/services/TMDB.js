import React, { useState, useEffect } from "react";
import axios from "axios";

export default function fetchData() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  let [posts, setPosts] = useState(null);
  const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
  const page = 1; //dummy variable

  const loadPost = async () => {
    setLoading(true);
    const response = await axios.get(url);

    if (typeof response != "undefined") {
      setPosts(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (url) {
      loadPost();
    }
  }, [url]);


    return { posts, loading, setUrl};
  
}
