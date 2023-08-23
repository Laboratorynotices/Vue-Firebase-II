<script setup lang="ts">
import { ref } from 'vue';

/**
 * Переменная для хранения введённого названия группы.
 */
const groupName = ref("");

/**
 * Определяем правило валидаций от Vuetify.
 * Если тест проходит, то возвращается true,
 * в противном случае строчка с ошибкой.
 * https://vuetifyjs.com/en/components/forms/#rules
 */
const rulesGroupName = [
  (value: string) => {
    // Если строчка не пустая, то срабатывает условие 
    if (value) return true;

    // Если проваливаем тест, то пишем сообщение об ошибке
    return "Вы должны ввести название группы.";
  },
];

/**
 * Переменная для обозначения загрузки
 * на кнопке отправки формы.
 */
const loading = ref(false);

/**
 * При прохождении проверки сохраняет данные в Firebase.
 *
 * @param event "Эвент" от формы, определить тип
 */
const submit = async (event: any): Promise<boolean> => {
  // Включаем заглушку
  loading.value = true;

  // Дожидаемся данных от эвента
  const results = await event;
  // Тест на валидацию
  if (!results.valid) {
    // Выключаем заглушку
    loading.value = false;
    // Выходим с "ошибкой"
    return false;
  }

  // Сохраняем данные в Firebase
  // @TODO
  console.log(groupName.value);

  // Очищаем форму
  groupName.value = "";

  // Выключаем заглушку
  loading.value = false;

  // Нормальное завершение
  return true;
};
</script>

<template>
  <v-sheet width="400" class="mx-auto">
    <v-form
      validate-on="submit lazy"
      @submit.prevent="submit"
      class="mb-7"
    >
      <v-text-field
        v-model="groupName"
        :rules="rulesGroupName"
        label="Название группы"
      ></v-text-field>
      <v-btn :loading="loading" type="submit" block class="mt-2"
        >Отправить</v-btn
      >
    </v-form>
    <v-divider></v-divider>
  </v-sheet>
</template>
