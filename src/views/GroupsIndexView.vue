<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { getGroups } from "@/firebase/groups";
import type { Group } from "@/types";
import GroupAddForm from "@/components/GroupAddForm.vue";
import IconTrashCan from "@/components/icons/IconTrashCan.vue";

// Указатель на хранилище групп
const groups: Ref = ref<Group[]>([]);

/**
 * Будет выполняться каждый раз,
 * когда документ будет "собран".
 */
onMounted(() => {
  getGroups(groups);
});
</script>

<template>
  <group-add-form></group-add-form>
  <v-card
    v-for="group in groups"
    :key="group.id"
    width="400"
    class="mx-auto my-6"
  >
    <v-card-item>
      <v-card-title>{{ group.name }}</v-card-title>
    </v-card-item>

    <v-card-text>Текст</v-card-text>
    <v-card-actions>
      <v-btn prepend-icon="mdi-trash-can-outline">
        <template v-slot:prepend>
          <icon-trash-can></icon-trash-can>
        </template>

        Удалить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
