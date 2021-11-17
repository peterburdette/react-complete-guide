import { useState, useCallback } from "react";

// requestConfig is the name of the object that gets passed into the hook that contains the url
const useHttp = (applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET", // the conditional allows for the user to not have to provide this property everytime
                headers: requestConfig.headers ? requestConfig.headers : {}, // the conditional allows for the user to not have to provide this property everytime
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null, // the conditional allows for the user to not have to provide this property everytime
            });

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || "Something went wrong!");
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
