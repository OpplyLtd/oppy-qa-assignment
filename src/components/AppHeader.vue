<script setup lang="ts">
import { onBeforeRouteUpdate, RouterLink, useRoute } from "vue-router";

import { isLoggedIn, logoutUser } from "@/util/userStatus";
import router from "@/router";

onBeforeRouteUpdate(() => {
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
                <li
                  class="nav-item"
                  :class="$route.name === 'Home' ? 'active' : ''"
                >
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

                <a
                  href="#"
                  @click.prevent="logout"
                  class="nav-link text-secondary"
                  >Logout</a
                >
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
    li.nav-item {
      a.nav-link {
        color: white;

        &.router-link-active {
          color: var(--bs-yellow);
        }
      }
    }
  }
}
</style>
