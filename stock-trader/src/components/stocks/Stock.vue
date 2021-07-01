<template><!--açoes para comprar que estão a venda-->
    <v-flex class="pr-3 pb-3" xs12 md6 lg4><!--padding right 3..padding botton=preenchimento a direita e abaixo quanto de espaço ocupara no browser,xs12:tamanho formato p celular md6:tablet lg4:tela de pc responsividade-->
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong><!--nome e preço da ação interpoladas-->
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height><!--fill-height:preenche toda a altura-->
                <v-text-field label="Quantidade" type="number"
                    :error="insufficientFunds || !Number.isInteger(quantity)"
                    v-model.number="quantity" /><!--quantity retornado no data() e v-model do tipo numerico apenas,,:error= text fica vermelho mostrando q é insuficiente o quanto tem de saldo para comprar açoes-->
                <v-btn class="green darken-3 white--text"
                    :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    @click="buyStock">{{ insufficientFunds ? 'Insuficiente' : 'Comprar' }}</v-btn><!--comprar uma ação botão-->
            </v-container><!--insufficientFunds ou se o saldo for menor que a compra pra não dar negativo,,quantity <= 0 quantidade for menor ou igual a 0,|| !Number.isInteger(quantity):ou se o numeto não é inteiro ===desabilita o botão-->
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],//define q existe uma props propriedade em stocks.vue q é :stock="stock"
    data() {
        return {
            quantity: 0//inicia 0 a quantidade
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds //gett para ter acesso ao saldo para calculo insufficientFunds abaixo
        },
        insufficientFunds() { //calculo para não deixar saldo da pessoa no negativo, ou seja não comprar mais do que não tem
            return this.quantity * this.stock.price > this.funds //retorna quantidade * preço > do que saldo da pesso em si
        }
    },
    methods: {
        buyStock() {//função de comprar uma ação e manda para portfolio q é açoes pessoais do q foi comprado de açoes
            const order = {//ordem de compra ordenar os dados em uma constante
                stockId: this.stock.id,
                stockPrice: this.stock.price,//id preço e quantidade
                quantity: this.quantity
            }
            //console.log('dados da const de compra', order);
            this.$store.dispatch('buyStock', order)//faz o dispatch ou seja manda para action de vuex o metodo e a const
            this.quantity = 0 //apos a const order q tem a compra.. quantity volta a ser 0 logo após click
        }
    }
}
</script>

<style>

</style>
