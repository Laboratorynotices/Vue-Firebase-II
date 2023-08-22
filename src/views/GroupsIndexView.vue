<script setup lang="ts">
import { onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "groups"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
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
