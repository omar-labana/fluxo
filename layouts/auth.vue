<template>
  <main class="d-flex flex-column flex-lg-row flex-column-fluid">
    <section
      class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1"
    >
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <div class="w-lg-500px p-10">
          <slot />
        </div>
      </div>
    </section>

    <section
      class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
    >
      <div
        class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100"
      >
        <h1>إدارة التحول الرقمي</h1>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
