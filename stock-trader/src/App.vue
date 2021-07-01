<template>
	<v-app>
		<Header /><!--referencia cabeçario, importado e comp.. para estar visivel a todas as urls estando no app.vue principal-->
		<v-content>
			<v-container>
				<transition name="slide" mode="out-in">
					<router-view></router-view><!--onde vai ser a rota principal-->
				</transition><!--out in para fazer as transição-->
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Header from './components/Header' //importa e componentizar cabeçario no app principal

export default {
	components: { Header },
	created() {
		this.$store.dispatch('initStocks')// para chamar uma action apartir do created usando dispatch é assim.. pq ta aqui??
	}
}
</script>

<style>
	@keyframes slide-in {/* a ver com transition da quando troca de cada rota*/
		from { transform: translateY(-30px); opacity: 0; }/*a partir de sai da opacidade 0 para a 1 para */
		to { transform: translateY(0px); opacity: 1; }/*para a*/
	}

	@keyframes slide-out {/*OBS: um tipo de transição q mostra de cima para baixo fica bonito*/
		from { transform: translateY(0px); opacity: 1; }/**/
		to { transform: translateY(-30px); opacity: 0; }/**/
	}

	.slide-enter-active {/*transition ativa ao entrar*/
		animation: slide-in 0.3s ease;/*animation tipo de animação q ira usar quantos segundos 0.3s e tipo de algoritimo ease*/
	}

	.slide-leave-active {/*ativo ao sair*/
		animation: slide-out 0.3s ease;
	}
</style>

