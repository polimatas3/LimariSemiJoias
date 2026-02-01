<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-gold-500/20 shadow-lg" style="background-color: #000000;">
    <div class="container mx-auto px-2 sm:px-4">
      <div class="flex items-center justify-between h-16 md:h-20 gap-2">
        <a href="/" class="flex items-center group flex-shrink-0">
          <img
            src="/logo-limari-preto.png"
            alt="Limári Semijoias"
            class="h-10 sm:h-12 md:h-16 w-auto group-hover:opacity-80 transition-opacity duration-300"
            style="background-color: #000000;"
            @error="console.error('Erro ao carregar logo:', $event)"
          />
        </a>
        <div class="flex items-center justify-center flex-1 min-w-0 px-2">
          <p class="text-white text-xs sm:text-sm md:text-base font-light text-center leading-tight">
            <span class="hidden sm:inline">Elegância que acompanha seu ritmo. </span>
            <span class="text-gold-500 font-medium">Semijoias Premium para mulheres protagonistas.</span>
          </p>
        </div>
        <div class="flex items-center justify-end flex-shrink-0">
          <img
            src="/Selo_de_Garantia_de_90_Dias_PNG_Transparente_Sem_Fundo.png"
            alt="Selo de Garantia de 90 Dias"
            class="h-10 sm:h-12 md:h-16 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            style="background: transparent;"
            @error="console.error('Erro ao carregar selo:', $event)"
          />
        </div>
      </div>
    </div>
  </header>
</template>
