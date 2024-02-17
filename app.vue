<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
onMounted(() => {
  document.documentElement.setAttribute("data-bs-theme", "dark");
  document.body.classList.add("app-blank");
  document.body.classList.add("bg-body");
});
</script>

<style>
#__nuxt {
  display: contents;
}
</style>
