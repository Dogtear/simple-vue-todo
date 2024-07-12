<script setup>
import { ref } from 'vue'

const showModalNav = ref(false)
</script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace has-text-white">NoteBalss</div>

        <a
          role="button"
          class="navbar-burger has-text-white"
          :class="{ 'is-active': showModalNav }"
          @click.prevent="showModalNav = !showModalNav"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showModalNav }">
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item has-text-white">Notes</RouterLink>
          <RouterLink to="/stats" class="navbar-item has-text-white">Stats</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
