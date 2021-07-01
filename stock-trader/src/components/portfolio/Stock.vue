<template><!--açoes que estão dentro do meu portifolio aqui vai ser usado para vender a ação que ja possui-->
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }}
                    <small>
                        (Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity }})
                    </small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number"
                    :error="insufficientQuantity || !Number.isInteger(quantity)"
                    v-model.number="quantity" />
                <v-btn class="blue darken-3 white--text"
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    @click="sellStock">{{ insufficientQuantity ? 'Insuficiente' : 'Vender' }}</v-btn><!--botão de vende seus investimentos trader, com insufficientQuantity botão muda para Insuficiente se não vender -->
            </v-container><!--:disabled=desabilita o campo se"insufficientQuantity quantidade insuficiente ou quantidade menor q 0 ou numeros quebrados ex: 3.5-->
        </v-card><!--:error= aviso de erro vermelho no campo-->
    </v-flex>
</template>

<script>
import { mapActions } from 'vuex' //ao importar mapActions é possivel fazer ...mapActio nos methods

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {//saber se tem quantidade é insuficiente de açoes comprada para não ocorrer de vender mais do q tem
            return this.quantity > this.stock.quantity //quantidade q foi digitado for 'maior' que a quantidade q possue e açoes no portfolio compradas
        }
    },
    methods: {
        ...mapActions({ sellStockAction: 'sellStock' }), //importado mapActions, faz spread e cria nome aleatorio sellStockAction e metodo sellStock()
        sellStock() {//função para vender uma ação 'processo parecido com o de comprar'
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.sellStockAction(order) //referencia nome action criada e passa const order que seria msm forma q fazer dispatch abaixo
            // this.$store.dispatch('sellStock', order) //dispatch: manda methods para actions, (desta forma não precisa import vuex)
            this.quantity = 0
        }
    }
}
</script>

<style>

</style>
