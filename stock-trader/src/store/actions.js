import Vue from 'vue'

export default {//exporta ppor padrão
    loadData({ commit }) {//carregar os dados, commit:para alterar as mutations
        Vue.prototype.$http('data.json').then(resp => {//faz um get Vue.prototype.$http.get nao necessario colocar get,data.json:coloca url
            const data = resp.data //constante resp.data:tipo pega dados do back usa esse termo
            if(data) {//se tiver const data dados do back
                commit('setStocks', data.stocks) //chama commit para setar em data.stocks carrega com get os dados salvos do stocks de opçoes como ex:twitter
                commit('setPortfolio', { //chama setPortfolio..
                    funds: data.funds, //poderia ser apenas o data mas chama objetos funds e stockPortfolio a ver com setPortfolio a mutations em portifolio.js
                    stockPortfolio: data.stockPortfolio
                })//metodo a ver de carregar os dados
            }
        })
    }
}