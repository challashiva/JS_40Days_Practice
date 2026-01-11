/* ## Project Task

Let's Build a “Movie Explorer” App

Build an app that lets users search movies using the OMDB API:
`http://www.omdbapi.com/?apikey=yourkey&s=movieName`

Hints:

- Input box for search term
- Display movie title, poster, and year
- Show “No results found” if search fails
- Use async/await, DOM manipulation, and try/catch */

const API_KEY = "83699838";

async function getMovieDetails(movieName) {
    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`;
    try {
        const res = await fetch(URL);
        if(!res.ok) throw new Error("Invalid movie name");

        const data = await res.json();
        displayData(data);
        console.log(data);
    } catch (error) {
        document.querySelector("#displayMovieDetails").innerHTML = `<p style="color:red;">${error}</p>`
    }
}

function displayData(data) {
    document.querySelector("#displayMovieDetails").innerHTML = `
        <p><b>Movie Name:</b> ${data.Search[0].Title}</p>
        <img src="${data.Search[0].Poster}" style="height:50px;width:50px;"/>
        <p><b>Movie Name:</b> ${data.Search[0].Year}</p>
    `
}

document.querySelector("#searchSubmit").addEventListener('click',()=>{
    const searchValue = document.querySelector("#movieName").value;
    if(searchValue) {
        getMovieDetails(searchValue);
    }
});