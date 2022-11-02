<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import { authenticateUser } from "@/api";
import { loginUser } from "@/util/userStatus";
import router from "@/router";

const user: Ref<string> = ref("");
const password: Ref<string> = ref("");

/**
 * Makes a request to the authentication endpoint, if successful logs in the user.
 * @todo handle errors when giving feedback to the UI.
 */
const handleSubmit = async () => {
  const authToken = await authenticateUser({
    username: user.value,
    password: password.value,
  });

  if (!authToken.token) return; // display an error in the form

  loginUser(authToken.token);

  await router.push({ name: "Suppliers" });
  router.go(0);
};

const handleUserInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  user.value = target.value;
};

const handlePasswordInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  password.value = target.value;
};
</script>

<template>
  <div class="login-form">
    <form @submit.prevent.stop="handleSubmit">
      <div class="mb-3">
        <label for="user" class="form-label">User Name / Email</label>

        <input
          id="user"
          class="form-control"
          type="text"
          placeholder="Enter your username"
          @input="handleUserInput"
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="Enter your password"
          @input="handlePasswordInput"
        />
      </div>

      <div class="mb-3">
        <button
          type="submit"
          class="btn btn-secondary"
          :disabled="!user || !password"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
