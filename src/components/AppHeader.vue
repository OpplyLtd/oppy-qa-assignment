<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

import { isLoggedIn, logoutUser } from "@/util/userStatus";
import router from "@/router";
import { onMounted } from "vue";

onMounted(() => {
  const route = useRoute();

  console.log(route.name);
});

const logout = async () => {
  logoutUser();

  await router.push({ name: "Login" });
};
</script>

<template>
  <header v-if="isLoggedIn">
    <div class="row">
      <div class="col">
        <div class="content">
          <nav class="navbar navbar-expand-lg fixed-top p-0">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse bg-dark justify-content-center"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>

                <li class="nav-item">
                  <RouterLink to="/suppliers" class="nav-link"
                    >Suppliers</RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink to="/quotes" class="nav-link">Quotes</RouterLink>
                </li>

                <li v-if="isLoggedIn" class="nav-item">
                  <a href="#" @click.prevent="logout" class="nav-link"
                    >Logout</a
                  >
                </li>
                <li v-else class="nav-item">
                  <RouterLink to="/login" class="nav-link">Login</RouterLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
nav {
  .navbar-nav {
    li {
      a {
        color: white !important;
      }
    }
  }
}
</style>
