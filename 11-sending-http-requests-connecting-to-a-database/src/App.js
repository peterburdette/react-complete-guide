import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // utilized the 'useCallback' hook to prevent subtle bugs if the 'fetchMoviesHandler' function within the 'useEffect' dependency was using an external state
    const fetchMoviesHandler = useCallback(async () => {
        // sets the state of 'isLoading' to true to display the loading messge
        setIsLoading(true);
        // sets the state to 'null' to clear out any previous errors that were received
        setError(null);

        try {
            // The 'response' is a json object with data that comes from the api. The 'response' will need to be converted to a javascript object so it can be used within the application

            // Javascript promises are being utilized to fetch the data. When dealing with promises, you can build these 'then' chains here, so Then call after Then call, but you can also use an alternative syntax, async await. You can add the 'async' keyword in front of the function and then 'await' in front of the operation which is returning a promise.

            // fetching the json data from the api url and 'then' handling the response
            // const response = await fetch("https://swapi.dev/api/film/");
            const response = await fetch("https://swapi.dev/api/films/");

            // checks to see if the response is returning within the 200's
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            // transforms the response into json
            const data = await response.json();

            // transform the data again so that the properties within the object match what we want them to be called
            const transformedMovies = data.results.map((movieData) => {
                // maps the object to new properties
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
            // sets the state of 'movies' to the api data
            setMovies(transformedMovies);
        } catch (error) {
            setError(error.message);
        }

        // sets the state of 'isLoading' to false to remove the loading message
        setIsLoading(false);
    }, []);

    // renders the list by calling the 'fetchMoviesHandler' on page load
    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
