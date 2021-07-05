const API_KEY = 'api_key=5a159ba656f74a280ac7057ef8945790';
const BASE_URL ='https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

getMovies(API_URL);


function getMovies(url){
    fetch(url).then(res => res.json()).then(data => { 
        console.log(data.results)
       showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML='';
    
    data.forEach(movie => {
        const title = movie;
        const poster_path = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML='<img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">\
        <div class="movie-info">\
        <h3>\
        ${title}\
        </h3>\
        <span class="${getColor(vote_average)}">${vote_average}</span>\
        </div>\
        <div class="overview">\
        <h3>Overview</h3>\
        ${overview}\
        </div>';
        
        
        main.appendChild(movieEl);
        
    })
}

function getColor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'

    }else{
        return 'red'
    }
}