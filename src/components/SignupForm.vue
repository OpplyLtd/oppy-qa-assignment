<script setup lang="ts">
import { useSignupForm } from "@/composables";

const {
  isSubmitButtonDisabled,
  handleSubmit,
  handleFirstNameInput,
  handleLastNameInput,
  handleEmailInput,
  handlePasswordInput,
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
          @input="handleFirstNameInput"
        />
      </div>
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Last Name"
          @input="handleLastNameInput"
        />
      </div>
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="email"
          @input="handleEmailInput"
        />
      </div>
      <div class="mb-3">
        <input
          class="form-control"
          type="password"
          placeholder="Password"
          @input="handlePasswordInput"
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
