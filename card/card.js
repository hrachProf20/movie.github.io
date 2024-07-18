// const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
// const main_url = "https://api.themoviedb.org/3";
// const api_url = main_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
// const img_url = "https://image.tmdb.org/t/p/w500";

let chekc = document.querySelector(".check");
const searching = document.querySelector(".searching i");
const search = document.querySelector("#search");
const actorsHt = document.querySelector('.actor')
let id = location.search.split("=", 2)[1];
const triller = document.querySelector('.triller')
console.log(id);
const swiper = document.querySelector('.mySwiper')
let play = false

function getMovieData(){
  myFetch(`https://api.themoviedb.org/3/movie/${id}?${api_url}`, "GET")
  .then((data) => printMovie(data))
}

getMovieData()






function getVideoData(){
    myFetch(`https://api.themoviedb.org/3/movie/${id}/videos?${api_url}`,'GET')
        .then((video) => {
            printVideos(video.results)
        })
}

getVideoData()

function watchTrailerVideos(){
    myFetch(`https://api.themoviedb.org/3/movie/${id}/videos?${api_url}`,'GET')
        .then((video) => {
            watchTrailer(video.results)
        })
}

watchTrailerVideos()


function printMovie(movie){
    console.log(movie)
  const img = document.createElement('img')
   img.classList.add('check_img')
   img.src = img_url + movie.poster_path
   const infoMovie = document.createElement('div')
   infoMovie.classList.add('info-movie')
   const name = document.createElement('h4')
   name.append(movie.original_title)
   const info = document.createElement('div')
   info.classList.add('info')
   const info_text = document.createElement('p')
   info_text.append(movie.overview)
   info.append(info_text)
   const name_date = document.createElement('div')
    const reyt = document.createElement('div')
    reyt.classList.add('reyting')
    const reytingItem = document.createElement('div')
    const watchVideo = document.createElement('button')
    watchVideo.classList.add('watch_video')
    watchVideo.textContent = 'watch trailer'
    reytingItem.classList.add('reytItem')
    reyt.append(watchVideo)
    name_date.classList.add('name_date')
    const quality = document.createElement('div')
    quality.classList.add('quality')
    const buttonQuality = document.createElement('button')
    buttonQuality.textContent = 'FHD'

    buttonQuality.classList.add('buttonQuality')
    const point = document.createElement('div')
    point.classList.add('point')
    const point2 = document.createElement('div')
    point2.classList.add('point')
    const data = document.createElement('p')
    data.classList.add('data')
    data.textContent = movie.release_date
    const genre = document.createElement('p')
    genre.textContent = 'Drama'
    genre.classList.add('genre')
    const subscribe = document.createElement("button")
    subscribe.textContent = 'Subscribe starting at 2000 AMD'
    subscribe.classList.add('subscribe')
    quality.append(buttonQuality)
    quality.append(point)
    quality.append(data)
    quality.append(point2)
    quality.append(genre)
    infoMovie.append(name_date)
    infoMovie.append(quality)
    infoMovie.append(subscribe)
   infoMovie.append(info)
    infoMovie.append(reyt)
   name_date.append(name)


    myFetch(`https://api.themoviedb.org/3/movie/${id}/credits?${api_url}`, "GET")
        .then((data)=>{
            data.cast.map((actor) => {
                swiper.innerHTML +=
                    `
                     <swiper-slide >
      <img class='img-actors' src="${ img_url + actor.profile_path}" alt="">
      <p class="actors-name">${actor.name}</p>
    </swiper-slide>
                    `
            })
        })

    infoMovie.append(swiper)
    infoMovie.append(triller)
   chekc.append(img)
   chekc.append(infoMovie)




}





function printVideos(video){
    video.map((el) => {
        if (el.type == "Trailer"){
            triller.innerHTML = `
               <div class="cont">
                 <iframe width="400"   height="205" src="https://www.youtube.com/embed/${el.key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `
        }
        console.log(play)
    })

}

