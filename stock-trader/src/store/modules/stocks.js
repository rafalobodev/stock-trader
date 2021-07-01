                        /*state, mutat e actions getter da parte de stoks sobre vuex p.. portifolio*/
import stocks from '@/data/stocks'  //import dos dados das açoes para comprar com commit('setStocks

export default {//export de vuex objetos abaixos..
    state: {
        stocks: [] //stoks inicial vazio array altera com import dps actions setStocks e dps mutations setStocks para aqui. dps referencia apartir getter
    },
    mutations: {//OBS:logica normalmente feita na mutations e actions encaminha ou recebe ?
        setStocks(state, stocks) {//state:primeiro parametro estado da aplicação,stocks:segundo parametro aquilo q quer passar q seria o tipo payload q é stoks array,mutations para aterar o stoks as açoes q estão para comprar
            state.stocks = stocks //altera o estado usando mutations,estado stoks array recebe stoks.. passou parametros pro metodo
        },
        randomizeStocks(state) {//metodo para randomizar o preço das açoes que estão em stocks[] para pode realizar os trader
            state.stocks.forEach(stock => {//faz forEach do stocks para percorrer o array
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.42))//com forEach ,Math.round:vai de 0 até 0,99 com - 0.42 faz uma leve tendencia nas açoes.. varia se der 1.2 subiu 20%.. se 0.90 diminuiu 10%
            })
        }
    },
    actions: {
        buyStock({ commit }, order) {//commit:para chamar a mutation para fazer actions,comprar uma ação com actions
            commit('buyStock', order)//ao clicar botão buyStock no methods vue essa action é disparadá e vai para mutations de portfolio.js o buyStock(state,..
        },
        initStocks({ commit }) {//metodo para inicializar a lista de açoes q tem no projeto
            commit('setStocks', stocks)//stoks import com as opçoes de açoes para a venda e dps altera com mutations
        },
        randomizeStocks({ commit }) { //faz commit para ir para a mutations
            commit('randomizeStocks') 
        }
    },
    getters: {//getter unico para obter dados
        stocks(state) {//todas as açoes registradas no estado
            return state.stocks //stocks: [] dados passar para componente vue.. por computed ou methods
        }
    }
}