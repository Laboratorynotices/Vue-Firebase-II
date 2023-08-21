# Эксперименты Vue 3 с Firebase
Разбираюсь как к [Vue 3](https://vuejs.org/) подключить к [Firebase](https://firebase.google.com/) и как с этим работать.

В проекте так же будет использоваться [TypeScript](https://www.typescriptlang.org), а Vue.js вместе с Composition API. Vue будет установлено при помощи [Vite](https://vitejs.dev/).

[Основная страница проекта](https://laboratorynotices.wordpress.com/2023/08/18/vue-3-firebase-2/).

[Демонстрация проекта](https://laboratorynotices.github.io/Vue-Firebase-II/).

Так же постараюсь придерживаться [соглашению о коммитах](https://www.conventionalcommits.org), по крайней мере, как я это буду понимать.

## Краткий список команд

запуск виртуального сервера для разработки:
```sh
npm run dev
```

сборка версии для продукции:
```sh
npm run build
```

запуск уже собранной (build) версии:
```sh
npm run preview
```

Но, чтобы открыть доступ к виртуальному серверу по сети надо добавить суффикс «-- --host». Т.е. для разработки и теста по сети буду использовать:

```sh
npm run dev -- --host
```

Обработка Lint
```sh
npm run lint
```
