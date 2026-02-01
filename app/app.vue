<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Obter URL base para URLs absolutas
let baseUrl = 'https://limarisemijoias.com.br'
let previewImageUrl = `${baseUrl}/ImgPreview.png`

if (import.meta.client) {
  baseUrl = window.location.origin
  previewImageUrl = `${baseUrl}/ImgPreview.png`
} else if (import.meta.server) {
  // No servidor, usar variável de ambiente se disponível
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public?.siteUrl
  if (siteUrl && typeof siteUrl === 'string') {
    baseUrl = siteUrl
    previewImageUrl = `${baseUrl}/ImgPreview.png`
  }
}

useHead({
  title: 'Limári Semijoias - Elegância que acompanha seu ritmo',
  meta: [
    {
      name: 'description',
      content: 'Semijoias Premium para mulheres protagonistas. Prata 925 e banho de ouro 18k.'
    },
    {
      property: 'og:title',
      content: 'Limári Semijoias - Elegância que acompanha seu ritmo'
    },
    {
      property: 'og:description',
      content: 'Semijoias Premium para mulheres protagonistas. Prata 925 e banho de ouro 18k.'
    },
    {
      property: 'og:image',
      content: previewImageUrl
    },
    {
      property: 'og:url',
      content: baseUrl
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:image',
      content: previewImageUrl
    }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
</script>
