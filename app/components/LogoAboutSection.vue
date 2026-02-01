<template>
  <section class="py-24 md:py-32 bg-gradient-to-b from-white via-gold-50/10 to-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <!-- Logo à esquerda com carrossel -->
        <div class="flex justify-center lg:justify-start">
          <div class="relative group">
            <!-- Brilho luxuoso ao redor -->
            <div class="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-2xl group-hover:bg-gold-500/20 transition-all duration-500"></div>
            <div class="absolute -inset-2 bg-gradient-to-br from-gold-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Borda decorativa -->
            <div class="absolute inset-0 border-2 border-gold-500/20 rounded-2xl group-hover:border-gold-500/40 transition-all duration-500"></div>
            
            <!-- Container do carrossel -->
            <div class="relative max-w-xs md:max-w-md h-auto overflow-hidden rounded-2xl shadow-luxury">
              <transition name="fade" mode="out-in">
                <img
                  :key="currentImageIndex"
                  :src="images[currentImageIndex]"
                  alt="Limári Semijoias"
                  class="w-full h-auto transform transition-transform duration-500 group-hover:scale-[1.03]"
                  @error="console.error('Erro ao carregar foto:', $event)"
                />
              </transition>
              
              <!-- Indicadores de navegação -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                <button
                  v-for="(image, index) in images"
                  :key="index"
                  @click="goToImage(index)"
                  :class="[
                    'w-2 h-2 rounded-full transition-all duration-300',
                    currentImageIndex === index 
                      ? 'bg-gold-500 w-6' 
                      : 'bg-white/50 hover:bg-white/80'
                  ]"
                  :aria-label="`Ir para imagem ${index + 1}`"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- About à direita -->
        <div class="space-y-8">
          <div class="mb-10">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-black-900 mb-6 leading-[1.2] tracking-tight">
              <span class="block">Beleza e</span>
              <span class="block bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent pb-2 md:pb-3">elegância</span>
              <span class="block pt-2 md:pt-3">em cada detalhe</span>
            </h1>
            <div class="flex items-center gap-4">
              <div class="h-px w-20 bg-gradient-to-r from-gold-500 to-transparent"></div>
              <div class="h-2 w-2 rounded-full bg-gold-500"></div>
              <div class="h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent"></div>
            </div>
          </div>
          
          <div class="space-y-8 text-lg md:text-xl text-black-600 leading-relaxed">
            <p class="text-2xl md:text-3xl font-light text-black-700 italic">
              Descubra nossa coleção selecionada de semijoias com qualidade e estilo.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div class="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-luxury border border-gold-200/30 hover:shadow-luxury-lg hover:border-gold-400/50 transition-all duration-500 transform hover:-translate-y-1">
                <div class="text-4xl mb-4">💛</div>
                <p class="font-bold text-black-900 mb-2 text-lg tracking-wide">Semijoias Banhadas Premium</p>
                <p class="text-sm text-black-600 font-light">Ouro 18k, Ródio Branco ou Negro</p>
              </div>
              <div class="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-luxury border border-gold-200/30 hover:shadow-luxury-lg hover:border-gold-400/50 transition-all duration-500 transform hover:-translate-y-1">
                <div class="text-4xl mb-4">🤍</div>
                <p class="font-bold text-black-900 mb-2 text-lg tracking-wide">Prata de Lei 925</p>
                <p class="text-sm text-black-600 font-light">92,5% de prata pura</p>
              </div>
            </div>
            
            <p class="mt-10 text-xl md:text-2xl font-light text-black-700">
              Navegue pelo nosso <strong class="font-bold text-gold-600">catálogo online</strong> e encontre peças que combinam com você!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/LimariFoto.png',
  '/LimariFoto02.png',
  '/LimariFoto03.png'
]

const currentImageIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

const goToImage = (index: number) => {
  currentImageIndex.value = index
  // Reinicia o intervalo quando o usuário clica manualmente
  resetInterval()
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const startInterval = () => {
  intervalId = setInterval(nextImage, 4000) // Alterna a cada 4 segundos
}

const resetInterval = () => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  startInterval()
}

onMounted(() => {
  startInterval()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
