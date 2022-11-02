import { computed, ref } from "vue";
import type { Ref } from "vue";

import { createUser } from "@/api";
import { loginUser } from "@/util/userStatus";
import router from "@/router";

export const useSignupForm = () => {
  const firstName: Ref<string> = ref("");
  const lastName: Ref<string> = ref("");
  const email: Ref<string> = ref("");
  const password: Ref<string> = ref("");

  /**
   * Determines if the form submit button should be disabled.
   */
  const isSubmitButtonDisabled = computed(() => {
    return (
      !firstName.value || !lastName.value || !email.value || !password.value
    );
  });

  /**
   * Handler for the form submit event.
   */
  const handleSubmit = async () => {
    const createUserResponse = await createUser({
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      username: email.value,
      password: password.value,
    });

    if (!createUserResponse.auth_token) return; // display an error in the form

    loginUser(createUserResponse.auth_token);

    await router.push({ name: "Suppliers" });
    router.go(0);
  };

  const handleFirstNameInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    firstName.value = target.value;
  };

  const handleLastNameInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    lastName.value = target.value;
  };

  const handleEmailInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    email.value = target.value;
  };

  const handlePasswordInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    password.value = target.value;
  };

  return {
    firstName,
    lastName,
    email,
    password,
    isSubmitButtonDisabled,
    handleSubmit,
    handleFirstNameInput,
    handleLastNameInput,
    handleEmailInput,
    handlePasswordInput,
  };
};
