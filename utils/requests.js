// const API_KEY = process.env.API_KEY;
const API_KEY = "4ba9e3f46d58a1ee44c2cb37e0c5f77b"

export default{
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horror Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: 'Western',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV: {
        title: 'TV Movie',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=10770`
    },
};