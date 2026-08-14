// REQUISIÇÃO
postsFetch.interceptors.request.use(
    function(config) {
        console.log("Antes da requisição...");
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

// RESPOSTA
postsFetch.interceptors.response.use(
    function(response) {
        console.log("Depois da requisição...");
        return response;
    },
    function(error){
        return Promise.reject(error);
    }
)


