<template>
  <div>Hello, World!</div>
</template>

<script setup>
onMounted(() => {
  // document.documentElement
  document.documentElement.setAttribute("data-bs-theme", "dark");
});
</script>
