import react, {createContext, useContext, useMemo, useState} from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
    const [currentMovie, setCurrentMovie] = useState(null);

    const onChangeCurrentMovie = (movie) => setCurrentMovie(movie);

    const value = useMemo(() => ({
        onChangeCurrentMovie,
        currentMovie,
    }), [currentMovie]);


    return (
        <MoviesContext.Provider value={value}>
            {props.children}
        </MoviesContext.Provider>
    );
}

export const useMoviesContext = () => {
    return useContext(MoviesContext);
}
