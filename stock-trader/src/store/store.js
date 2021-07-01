import Vue from 'vue'   /*store central do projeto com vuex para passar muito dados de um lado para outro*/
import Vuex from 'vuex' //importa vuex

import actions from './actions' //importa a action arquivo com get para ser reconhecida pelo vuex

import stocks from './modules/stocks'//importa pro store central os modulos filhas vuex
import portfolio from './modules/portfolio' //importa para arquivo vuex funcionar no store central

Vue.use(Vuex) //usar o vuex

export default new Vuex.Store({ //objetos abaixo para configurar a store
    actions, //importado e registrado aqui action arquivo
    modules: {
        stocks, //registra os dados vuex importados
        portfolio
    }
})//OBS:registrar dentro de main.js o store para funcionar