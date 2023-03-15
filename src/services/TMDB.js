// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// const page = 1; //dummy variable

// export const tmdbApi = createApi({
//   reducerPath: 'tmdbApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
//   endpoints: (builder) => ({
//     /*Get Movies by [Type]*/
//     getMovies: builder.query({
//       query: () => `/movie/popular?page=${page}&api_key=${tmdbApiKey}`,
//     }),
//   }),
// });

// export const {
//   useGetMoviesQuery,
// } = tmdbApi;/

// function tmdbApi() {
  
//   const [loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//       const loadPost = async () => {

//           // Till the data is fetch using API 
//           // the Loading page will show.
//           setLoading(true);

//           // Await make wait until that 
//           // promise settles and return its result
//           const response = await axios.get(
//           "https://api.themoviedb.org/3//movie/popular?&api_key=5cec147b40afbcc165e384271f91f485");

//           // After fetching data stored it in posts state.
//           setPosts(response.data);

//           // Closed the loading page
//           setLoading(false);
//       }

//       // Call the function
//       loadPost();
//   }, []);

// }

// export const {
//   useGetMoviesQuery,
// } = tmdbApi;