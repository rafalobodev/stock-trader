import Vue from 'vue'
import axios from 'axios' //importar o axios no projeto

Vue.use({
    install(Vue) {//coloca axios para uso..
        Vue.prototype.$http = axios.create({//prototype:faz conexão vue com axios.create para criar e $http:nomenclatura escolhido nomalmente por padrão $http
            baseURL: 'https://stock-trader-3429f.firebaseio.com/'
        })//coloca a url do backend para fazer conexão do front com o back
    }
})