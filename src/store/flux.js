const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			home:[],
			upcoming:[],
			trending:[],
			shows:[],
			people:[],
			favourites:[]
		},
		actions: {
			// Usa getActions para llamar una function dentro de una fuction. Te dejo un ejemplo
			addFav: favorito => {
				setStore({
					// favoritos = favoritos en store + lo nuevo que viene por el parametro
					favourites: getStore().favourites.concat(favorito)
				});
			},
			removFav: favorito => {
				setStore({
					favourites: getStore().favourites.filter(function(item, index) {
						// return favorito.id !== item.id;
						if (favorito.id !== item.id) {
							return item;
						}
					})
				});
			},
            //funcion de ejemplo para hacer peticiones fetch
			loadMovies: () => {
				fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        		.then(response => response.json())
        		.then(data =>setStore({home:data.results}));
						
				/**
					fetch().then().then(data => setStore({ demo: data.bar }))
				*/
			},
			loadShows: () => {
				fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        		.then(response => response.json())
        		.then(data =>setStore({shows:data.results}));
						
				/**
					fetch().then().then(data => setStore({ demo: data.bar }))
				*/
			},
			loadPeople: () => {
				fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        		.then(response => response.json())
        		.then(data =>setStore({people:data.results}));
						
				/**
					fetch().then().then(data => setStore({ demo: data.bar }))
				*/
			},
			   //funcion de ejemplo para hacer peticiones fetch
			   loadUpComing: () => {
				fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
				.then(response => response.json())
				.then(data=>setStore({upcoming:data.results}));

			},
			loadTrending: () => {
				fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
				.then(response => response.json())
				.then(data => setStore({trending:data.results}));

			},
			changeColor: (color) => {
                //actualiza un dato de la global store
                setStore({ demo: color });
                
				//Para obtener datos de la store y usarlos como en el ejemplo de la linea 23 a la 26
				// const store = getStore();

				//suponiendo que demo es un array con datos  
				//con colores predefinidos
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm = color;
				// 	return elm;
				// });

			}
		}
	};
};

export default getState;