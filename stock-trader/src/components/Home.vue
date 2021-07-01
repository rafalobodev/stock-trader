<template><!--pagina inicial rota inicial-->
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
        <v-sheet :elevation="6" class="pa-2 primary"><!--v-sheet:como se fosse uma folha, :elevation="6":sombreamento quanto maior melhor-->
            <v-icon class="white--text mr-3">info</v-icon><!--icone cor branca-->
            <span class="headline white--text font-weight-light"><!--headline:letra um pouco maior-->
                Você pode Salvar & Carregar os Dados
            </span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 success darken-1 mt-3"><!--mt:margem top para não ficar grudado-->
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">
                Clique em 'Finalizar Dia' para iniciar um novo dia!
            </span>
        </v-sheet>
        <v-divider class="my-4" /><!--my:tipo margem top e margem bottom-->
        <p class="display-1"><strong>Seu Saldo:</strong> {{ funds | currency }}</p><!--fundos ou saldo conta | currency filtro para formato em dinheiro feito no main.js-->
    </div><!--display-1:aumenta tamanho da letra-->
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds //faz um getters pega da store os fundos ou seja saldo
        }
    }
}
</script>

<style>

</style>
