<template>
  <div class="relative w-full h-16 md:h-24 overflow-hidden">
    <!-- Gradiente de transição suave -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gold-50/20 to-transparent"></div>
    
    <!-- Linha decorativa central -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="flex items-center gap-4 w-full max-w-4xl px-4">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/30 to-gold-500/50"></div>
        <div class="h-1.5 w-1.5 rounded-full bg-gold-500/50"></div>
        <div class="h-px flex-1 bg-gradient-to-l from-transparent via-gold-500/30 to-gold-500/50"></div>
      </div>
    </div>
  </div>
</template>
