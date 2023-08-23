<script setup lang="ts">
import { ref } from 'vue';

/**
 * Переменная для хранения введённого названия группы.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const groupName = ref("");

/**
 * Определяем правило валидаций от Vuetify.
 * Если тест проходит, то возвращается true,
 * в противном случае строчка с ошибкой.
 * https://vuetifyjs.com/en/components/forms/#rules
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rulesGroupName = [
  (value: string) => {
    // Если строчка не пустая, то срабатывает условие 
    if (value) return true;

    // Если проваливаем тест, то пишем сообщение об ошибке
    return "Вы должны ввести название группы.";
  },
];
</script>

<template>
  <v-sheet width="400" class="mx-auto">
    <v-form @submit.prevent class="mb-7">
      <v-text-field
        v-model="groupName"
        :rules="rulesGroupName"
        label="Название группы"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Отправить</v-btn>
    </v-form>
    <v-divider></v-divider>
  </v-sheet>
</template>
