import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        // the 'response' is a json object with data that comes from the api. The 'response' will need to be converted to a javascript object so it can be used within the application

        // fetching the json data from the api url and 'then' handling the response
        fetch("https://swapi.dev/api/films/")
            .then((response) => {
                // 'response' data transformation step from json object to javascript object
                return response.json();
            })
            // 'data' is the transformed data from the 'return response.json()' statement
            .then((data) => {
                // transform the data again so that the properties within the object match what we want them to be called
                const transformedMovies = data.results.map((movieData) => {
                    // mapping the object to new properties
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date,
                    };
                });
                // sets the state of 'movies' to the api data
                setMovies(transformedMovies);
            });
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies} />
            </section>
        </React.Fragment>
    );
}

export default App;
