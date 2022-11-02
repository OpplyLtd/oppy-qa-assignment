<script setup lang="ts">
import { usePagination } from "@/composables";

const { page, totalRecords } = usePagination();
</script>

<template>
  <footer class="app-footer fixed-bottom bg-dark d-flex justify-content-center">
    <AppPagination
      v-if="totalRecords && page"
      v-model="page"
      :records="totalRecords"
      :per-page="10"
      theme="bootstrap4"
    />
  </footer>
</template>

<style lang="scss">
.app-footer {
  max-height: 4.5rem;
  padding-top: 1rem;
}
</style>
