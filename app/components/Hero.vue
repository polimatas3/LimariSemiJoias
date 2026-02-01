<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Gradiente de fundo moderno -->
    <div class="absolute inset-0 bg-gradient-to-br from-white-50 via-gold-50 to-white opacity-90"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black-500/5 to-transparent"></div>
    
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Lado esquerdo - Texto de apresentação -->
        <div class="space-y-6">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-black-700 leading-tight">
            Elegância em
            <span class="text-gold-500">Cada Detalhe</span>
          </h1>
          <p class="text-xl md:text-2xl text-black-500 leading-relaxed">
            Descubra nossa coleção exclusiva de semi-joias em dourado,
            criadas para realçar sua beleza única e sofisticada.
          </p>
          <p class="text-lg text-black-400">
            Peças cuidadosamente selecionadas que combinam qualidade,
            estilo e elegância para momentos especiais.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary">
              Ver Coleção
            </Button>
            <Button variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>

        <!-- Lado direito - Espaço para imagem -->
        <div class="relative">
          <div class="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <!-- Placeholder para a imagem -->
            <div class="w-full h-full bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
              <div class="text-center space-y-4">
                <svg class="w-24 h-24 mx-auto text-gold-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p class="text-black-400 text-sm">Imagem será adicionada aqui</p>
              </div>
            </div>
            <!-- Aqui será inserida a imagem da mulher com brincos -->
            <!-- <img src="/path/to/image.jpg" alt="Mulher usando brincos" class="w-full h-full object-cover"> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue'
</script>
