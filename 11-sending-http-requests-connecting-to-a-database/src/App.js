import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);

    async function fetchMoviesHandler() {
        // The 'response' is a json object with data that comes from the api. The 'response' will need to be converted to a javascript object so it can be used within the application

        // Javascript promises are being utilized to fetch the data. When dealing with promises, you can build these 'then' chains here, so Then call after Then call, but you can also use an alternative syntax, async await. You can add the 'async' keyword in front of the function and then 'await' in front of the operation which is returning a promise.

        // fetching the json data from the api url and 'then' handling the response
        const response = await fetch("https://swapi.dev/api/films/");
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
