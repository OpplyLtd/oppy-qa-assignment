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
  <div class="submit-form card flex-grow-1">
    <div class="card-body">
      <form @submit.prevent.stop="handleSubmit">
        <div class="mb-3">
          <label for="first-name" class="form-label">First Name</label>
          <input
            id="first-name"
            class="form-control"
            type="text"
            placeholder="Enter your first name"
            @input="handleFirstNameInput"
          />
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last Name</label>
          <input
            id="last-name"
            class="form-control"
            type="text"
            placeholder="Enter your last name"
            @input="handleLastNameInput"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            class="form-control"
            type="text"
            placeholder="Enter your email"
            @input="handleEmailInput"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            class="form-control"
            type="password"
            placeholder="Enter a password"
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
  </div>
</template>

<style>
.submit-form.card {
  max-width: 50%;
}
</style>
