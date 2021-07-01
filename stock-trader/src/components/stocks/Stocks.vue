<template><!--mostra todas as açoes que tem no mercado disponiveis.. seria como o index da aplicação dessa rota  path: '/stocks-->
    <v-layout row wrap><!--row:tudo colocado em linha, wrap: se ultrapassar a linha ela quebra continuando abaixo-->
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" /><!--Stock arquivo filha açoes para comprar que estão a venda-->
    </v-layout><!--faz v-for in para sair os dados do array na tela..-->
</template>

<script>
import Stock from './Stock' //importando componente filha

export default {
    components: { Stock }, //importado e componentizado para pai
    computed: {
        stocks() {//em computed faz metodo função para direcionar para o getter que vai apontar para store return state.stocks
            return this.$store.getters.stocks //para assim conectar com a template finalmente :stock="stock"
        }
    }
}
</script>

<style>

</style>
