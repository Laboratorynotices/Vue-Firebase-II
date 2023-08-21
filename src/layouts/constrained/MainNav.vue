<script setup lang="ts">
import { navElements } from "@/menu-elements";
</script>

<template>
  <nav>
    <v-btn
      v-for="(navElement, i) in navElements"
      :key="i"
      :to="navElement.path"
      variant="text"
    >{{ navElement.nameMenu }}</v-btn>
  </nav>
</template>
