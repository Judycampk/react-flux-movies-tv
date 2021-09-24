const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			home:[],
			movies:[]
		},
		actions: {
			// Usa getActions para llamar una function dentro de una fuction. Te dejo un ejemplo
			exampleFunction: () => {
				getActions().changeColor("green");
			},
            //funcion de ejemplo para hacer peticiones fetch
			loadCarousel: () => {
				fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        		.then(response => response.json())
        		.then(data =>setStore({home:data.results}));
						
				/**
					fetch().then().then(data => setStore({ demo: data.bar }))
				*/
			},
			loadMovies:() => {
				fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        		.then(response=>response.json())
        		.then(data =>setStore({movies:data.results}));
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