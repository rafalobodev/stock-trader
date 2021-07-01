<template><!--cabeçario da aplicação-->
    <v-toolbar app><!--v-toolbar: vuetify são opçoes de cabeçario, propriedade app?-->
        <v-toolbar-title class="headline text-uppercase mr-4"><!--headline:letra um pouco maior,mr-4:espaçamento a direita -->
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat to="/">Início</v-btn><!--botoes to=: para mudar de rotas ao clicar,flat:fica mais bonito sem cara de botão-->
            <v-btn flat to="/portfolio">Portfólio</v-btn>
            <v-btn flat to="/stocks">Ações</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer><!--da um espaçamento..-->

        <v-toolbar-items>
            <v-btn flat @click="endDay">Finalizar Dia</v-btn><!--endDay() referencia no click q vai varias as açoes em cada dia-->
            <v-menu offset-y><!--menu de opçoes ao clicar abre as opçoes de click-->
                <v-btn flat slot="activator">Salvar & Carregar</v-btn><!--slot="activator":pode fazer outras coisas de forma automatizada com colocar um icone um name logos ? mas nao bem como funciona..-->
                <v-list>
                    <v-list-tile @click="saveData">
                        <v-list-tile-title>Salvar Dados</v-list-tile-title><!--salvar os dados no backend com post-->
                    </v-list-tile>
                    <v-list-tile @click="loadDataLocal">
                        <v-list-tile-title>Carregar Dados</v-list-tile-title><!--carregar os dados puxa os dados com get-->
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-layout align-center>
                <span class="text-uppercase grey--text text--darken-2">
                    Saldo: {{ funds | currency }}<!--coloca saldo total que possui de dinheiro | currency filtro para formato em dinheiro feito no main.js-->
                </span>
            </v-layout>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex' //importa actions

export default {
    computed: {
        funds() {
            return this.$store.getters.funds //saida do saldo do stores usando getters
        }
    },
    methods: {//loadData:action com get para carregar os dados
        ...mapActions(['randomizeStocks', 'loadData']), //actions importada, mapeia com spread randomizeStocks de modules/stoks.js
        endDay() {//faz função para chamar action this.randomizeStocks() abaixo
            this.randomizeStocks()
        },
        saveData() {//metodo para salvar os dados como um save game
            const { funds, stockPortfolio, stocks } = this.$store.getters //pega com getters ou seja esponhe funds, stockPortfolio, stocks
            this.$http.put('data.json', { funds, stockPortfolio, stocks })//$http:nomeado criado para usar axios e.put:metodo de salvar dados, mandando para backend em format data.json
        },
        loadDataLocal() {//chama o loadData em um novo metodo pra colocar na template
            this.loadData()
        }
    }
}
</script>

<style>

</style>
