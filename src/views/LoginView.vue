<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";
</script>

<template>
  <div class="greetings">
    <h1 class="green">Login</h1>
    <LoginForm />

    <p>
      Don't have an account?
      <RouterLink to="/signup">signup here</RouterLink>.
    </p>
  </div>
</template>
