import Vue from 'vue'                /*mais.js: import centrais do projeto ficam aqui*/
import './plugins/vuetify' //vuetify tipo html do vue melhor
import App from './App.vue' //import do app.vue principal

import './plugins/axios' //importa axios no main q ja fica configurado no proprio arquivo axios.js

import router from './router' //import das rotas
import store from './store/store'//import do store central pai para o main central do projeto em si

Vue.config.productionTip = false
//normalmente tbm filtros são criados dentro de uma pasta mas como projeto pequeno fica aqui
Vue.filter('currency', value => {//currency:apenas nome criado escolhido q sera interpolado e estando no main esta global, value recebe valor arrowFunction
	return 'R$ ' + value.toLocaleString() //com valor real $ concatena+ com value.toLocaleString():para aplica virgular no dineiro
})

new Vue({
	router,
	store,//declara a store no main para funcionar o vuex
	render: h => h(App),
}).$mount('#app')
