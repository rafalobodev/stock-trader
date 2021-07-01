import Vue from 'vue' //import padrão vue
import Router from 'vue-router' //import router para fazer as rotas

import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'//importa os arquivos que serão as rotas
import Stocks from './components/stocks/Stocks'

Vue.use(Router)//para router ser registrado

export default new Router({//exporta rota padrão..
    mode: 'history', //modo history mais util e usado para não ter # na url
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },//path :nome da rota url, component: componente arquivo que foi importado import
        { path: '/stocks', component: Stocks },
    ] //array com todas as rotas que serão usadas..
})