
async function obtenerUsuaioAleatoio () {
    const endpoint = 'https://randomuser.me/api/';

    try {
        const res = await fetch(endpoint)
        const data = await res.json();
        const user = data.results[0];
        const name = ` ${user.name.first} ${user.name.last} `
        const location = ` ${user.location.country}, ${user.location.state}`
        const userAvatar = user.picture.large

        const userInfo = document.querySelector('#userInfo');
        userInfo.innerHTML = `<p>${name}</p> <p>${location}</p> <img src="${userAvatar}" alt="Avata de usuario random">`
        
    } catch (error) {
        console.error(error)
    }
    
}

async function mostrarListaDePost () {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const res = await fetch(endpoint)
        const data = await res.json();
        const primerosPost = data.slice(0,10)

        const postsList = document.querySelector('#postsList');
        let listaOrdenada = "";
        primerosPost.forEach(post => {
            listaOrdenada += `<li>${post.title}</li>`
        });
        postsList.innerHTML = `<ol>${listaOrdenada}</ol>`
        
    } catch (error) {
        console.error(error)
    }
    
}

async function mostrarClima () {
    const city = 'Mendoza';
    const APIKey = 'c61e0400e304a834d4159274cfc06146';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    try {
        const res = await fetch(endpoint)
        const data = await res.json();
        
        console.log(data)
        
    } catch (error) {
        console.error(error)
    }
    
}



obtenerUsuaioAleatoio();
mostrarListaDePost()
mostrarClima();
