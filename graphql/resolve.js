import { addMovie, deleteMovie, getById, getMovies } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        getMoiveById: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};


export default resolvers;