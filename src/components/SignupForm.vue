<script setup lang="ts">
import { useSignupForm } from "@/composables";

const {
  firstName,
  lastName,
  email,
  password,
  isSubmitButtonDisabled,
  handleSubmit,
} = useSignupForm();
</script>

<template>
  <div class="login-form">
    <form @submit.prevent.stop="handleSubmit">
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="First Name"
          @input="firstName = $event.target.value"
        />
      </div>
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Last Name"
          @input="lastName = $event.target.value"
        />
      </div>
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="email"
          @input="email = $event.target.value"
        />
      </div>
      <div class="mb-3">
        <input
          class="form-control"
          type="password"
          placeholder="Password"
          @input="password = $event.target.value"
        />
      </div>

      <div class="bmb-3">
        <button
          class="btn btn-secondary"
          type="submit"
          :disabled="isSubmitButtonDisabled"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</template>
