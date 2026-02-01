<template>
  <section class="relative w-full h-[600px] md:h-[800px] overflow-hidden pt-16 md:pt-20">
    <div
      class="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 hover:scale-[1.02]"
      :style="{ backgroundImage: 'url(https://lh3.googleusercontent.com/sitesv/APaQ0SSuH3KxloBHcYrN6WaZmFBwXwfNbjRcTK4RCm3qwoU4xdRj5bdZuZHmiaNLLCEB7qpfGJNSy4rQ8IwNFH2fxX93ZIPQevuKSLkyGm4yruV43jT8L5jHRq6vOR00iCnn9d9tB3Kt48w7bBTloP44FVF6Rby1ZZtbvNzBE25d7DjMXfNz_9jWw3sC=w16383)' }"
    >
      <!-- Overlay elegante em camadas -->
      <div class="absolute inset-0 bg-gradient-to-t from-black-900/60 via-black-500/20 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/5"></div>
      
      <!-- Efeito de brilho sutil -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent"></div>
      
      <!-- Gradiente de fade luxuoso na parte inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/40 to-white/95"></div>
      
      <!-- Borda decorativa superior -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
    </div>
    
    <!-- Botão de catálogo sobreposto no final -->
    <div class="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-0 right-0 z-20">
      <div class="container mx-auto px-3 sm:px-4">
        <div class="flex justify-center">
          <a
            href="https://63262808000167.shopping.marketup.com"
            target="_blank"
            class="group relative bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-600 hover:via-gold-700 hover:to-gold-600 text-black-900 font-bold py-3 px-4 sm:py-4 sm:px-6 md:py-5 md:px-8 lg:py-6 lg:px-12 rounded-xl sm:rounded-2xl shadow-luxury-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-center inline-block overflow-hidden border border-gold-400/40 backdrop-blur-sm"
          >
            <!-- Efeito de brilho luxuoso -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <!-- Brilho sutil de fundo -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <span class="relative z-10 tracking-luxury text-xs sm:text-sm md:text-base lg:text-lg uppercase font-bold whitespace-nowrap">Acesse nosso catálogo exclusivo</span>
            
            <!-- Decoração nas bordas -->
            <div class="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-gold-300/60 rounded-tl-xl sm:rounded-tl-2xl"></div>
            <div class="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-gold-300/60 rounded-br-xl sm:rounded-br-2xl"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
