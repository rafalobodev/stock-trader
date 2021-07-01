export default {    /*state, mutat e actions getter da parte de portfolio sobre vuex p.. stoks*/
    state: {
        funds: 10000, //valor dos saldos
        stocks: [] //stok q inicia vazio array
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) {//recebe action de stocks.js com buyStock({ commit }..,buyStock:metodo comprar,representa order const de compra as propriedades stockId, quantity, stockPrice
            const record = state.stocks.find(element => element.id == stockId)//find:tentar ver se tem id repetida para não ser adicionada
            if (record) {//se tiver essa const com id repetido..
                record.quantity += quantity //dai acrescenta + quantidade apenas
            } else {//se não..
                state.stocks.push({//faz o push para array de stocks incluir um novo
                    id: stockId,
                    quantity: quantity //importa o id e quantidade o (preço no caso é flutuante tipo ele não é incluso só vai servir para diminuir ou não o saldo)
                })
            }
            state.funds -= stockPrice * quantity //dai dps do q tem em cima ajusta o saldo e quantidade,, preço do stock * quantidade comprada q diminui no total saldo
        },
        sellStock(state, { stockId, quantity, stockPrice }) { //mutat agr para vender uma ação, primeiro param sempre state estado, segundo parametros ou payload ou a ordem de venda no caso
            const record = state.stocks.find(element => element.id == stockId)//const status id for igual elemento id
            if (record.quantity > quantity) { //se record id da ação twitter ou o que for tiver quantidade que eu tenho maior q a quantidade que eu quero ter
                record.quantity -= quantity //claramente subtrai a quantidade de açoes ex: twitter 2 açoes e vende 1 fica apenas com 1 agora
            } else {//se não vendeu todas as açoes q tinha de sla twitter, splice:função para remover elemento açoes toda vendida do array
                state.stocks.splice(state.stocks.indexOf(record), 1)//com splice escluindo record: a propria const por ex: representa twitter q esta no portifolio, e , 1 exclui do portifolio 1 elemento apenas
            }//método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
            state.funds += stockPrice * quantity //resultado da venda do stockPrice q tive ex:twitter vai para funds saldo conta
        },
        setPortfolio(state, portfolio) {//alteração das stoks de portifolio e saldo a ver com get de carregar os dados salvos do backend
            state.funds = portfolio.funds //estado do saldo recebe no portfolio carteira o saldo salvo
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [] //armazena portfolio.stockPortfolio em stok se não vazio
        }
    },
    actions: {
        sellStock({ commit }, order) {//faz commit para enviar p a mutations
            commit('sellStock', order)//sellStock:nome da mutations, order
        }
    },
    getters: {//primeiro state:estado da aplicação e segundo getter de todos os getters da aplicação
        stockPortfolio(state, getters) {//retornar todas as açoes do portfolio, retornando o q esta dentro do estado stocks: [] como nome da ação preço da ação e quantidade q possui
            return state.stocks.map(stock => {//map:percorrer todo o array stock state
                const record = getters.stocks.find(element => element.id == stock.id)//acessa o outro getter dentro de stocks.js e pega todas as açoes cadastradas pois lá q tem esses dados
                return {//find para achar o id e outros dados abaixo:
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }           /*resumindo usa getter para pegar o resto dos dados de portfolio que faltou */
            })
        },
        funds(state) {//proximo getter quanto de funds conta vai possui no portfolio apenas
            return state.funds
        }
    }
}