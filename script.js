const movieMenu = document.querySelector('#movie')
const searching = document.querySelector('.searching i')
const search = document.querySelector('#search')
myFetch(api_url,'GET').then(movie => movie)
.then((data) => movies(data.results))

    searching.addEventListener('click',() => {
      search.style.display = 'block'
    })

function movies(data){
    movieMenu.innerHTML = ''
    data.map((el) => {
        const movieItem = document.createElement('div')
        movieItem.classList.add('movie_item')
        let img = document.createElement('img')
        img.src = img_url + el.poster_path
        img.classList.add('movie-img')
        movieItem.append(img)

        movieMenu.append(movieItem)

        img.addEventListener('click',() => {
            location.href = 'card/card.html?id=' + el.id
        })
    })
}

    search.addEventListener("keyup", (e) => {
        let inpVal = e.target.value;
        id = setTimeout(() => {
            clearTimeout(id);
                myFetch(`${searchUrl}&query=${inpVal}`,'GET')
                    .then((data) => {
                        if (inpVal.length <= 0){
                            myFetch(api_url,'GET').then(movie => movie)
                            .then((data) => movies(data.results))
                        }
                        movies(data.results)
                    })
                    .catch((error) => {

                })
        }, 1000);
    });



