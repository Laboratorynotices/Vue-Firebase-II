<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainNav from "./MainNav.vue";
import AppMainColLeft from './AppMainColLeft.vue';
import DummyComponent from "@/components/DummyComponent.vue";
</script>

<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          v-if="false"
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <main-nav></main-nav>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <app-main-col-left></app-main-col-left>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" elevation="4" class="pa-6">
              <!-- Подключение страниц маршрутизатором из файла App.vue -->
              <router-view />

              <!-- Баг на GitHub Pages. Обходим его, добавляя этот компонент. -->
              <dummy-component></dummy-component>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
