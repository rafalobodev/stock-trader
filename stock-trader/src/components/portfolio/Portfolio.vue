<template><!--exibe todas as açoes que um usuario possui e sua conta-->
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" /><!--stocks de mapgetter q foi apontado podendo assim ter açoes em seu proprio portfolio-->
    </v-layout><!--<Stock é o que foi importado-->
</template>

<script>
import { mapGetters } from 'vuex' //importa getters no componente para uso
import Stock from './Stock'

export default {
    components: { Stock },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio' // stocks:nome criado vai apontar para.. coloca o nome do getter stockPortfolio de portifolio.js
        })
    }
}
</script>

<style>

</style>
