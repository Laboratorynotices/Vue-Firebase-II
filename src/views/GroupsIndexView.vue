<script setup lang="ts">
import { onMounted } from "vue";
import { getGroups } from "@/firebase/groups";

/**
 * Будет выполняться каждый раз,
 * когда документ будет "собран".
 */
onMounted(async () => {
  getGroups();
});
</script>

<template>
  <v-card width="400" class="mx-auto">
    <v-card-item>
      <v-card-title>Заголовок</v-card-title>
    </v-card-item>

    <v-card-text>Текст</v-card-text>
    <v-card-actions>Действия</v-card-actions>
  </v-card>
</template>
