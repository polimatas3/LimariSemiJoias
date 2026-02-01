<template>
  <button
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200'
  
  const variantClasses = {
    primary: 'bg-gold-500 hover:bg-gold-600 text-black-700 shadow-gold-lg transform hover:scale-105',
    outline: 'bg-transparent border-2 border-black-500 hover:bg-black-500 hover:text-white text-black-500'
  }
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-4 px-8',
    lg: 'py-5 px-10 text-lg'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]}`
})
</script>
