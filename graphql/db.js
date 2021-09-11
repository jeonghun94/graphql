import axios from "axios";

let API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = async (rating, limit) => {

    if (limit > 0) {
        API_URL += `&limit=${limit}&sort_by=title`;
    }

    const { data: { data: { movies } } } = await axios.get(API_URL);
    return movies;
};


