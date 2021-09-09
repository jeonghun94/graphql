import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(rating, limit)
    }
};

export default resolvers;