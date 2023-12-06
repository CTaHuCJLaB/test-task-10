Установка зависимостей: npm i (из корня проекта)
Запуск дев-сервера: npm run dev (из корня проекта)
Сборка проекта: npm run build (из корня проекта)
Запуск проекта: npm run start (из корня проекта)

Описание полей в ответе сервера:
{
  "form_errors": // null, ошибки, возникшие при проверке данных запроса
  "success_message": "Success", // сообщение об успешной/неуспешной обработке запроса сервером
  "page_data": { // данные страниц, содержащих страны с запрошенным языком
    "data": [ // массив стран с запрошенным языком
      {
        "iso_3166_1_a2": "RU", // двухуквенный код страны, определенный в ISO 3166-1, части стандарта ISO 3166
        "iso_3166_1_a3": "RUS", // трехбуквенный код страны, определенный в ISO 3166-1, части стандарта ISO 3166
        "iso_3166_1_numeric": "643", // трёхзначный код страны, определённый в ISO 3166-1, части стандарта ISO 3166
        "printable_name": "Russian Federation", // печатное название страны (видимо, имеется в виду официальное полное название)
        "name": "", // видимо, имеется в виду краткое название (например Russia)
        "display_order": 0, // предположительно порядковый номер сверху при отображении списка из нескольких стран
        "is_shipping_country": true  // предположительно поле означает, является ли страна судоходной
      }
    ],
    "rpag": { // видимо, список страницах, содержащих страны с запрошенным языком
      "has_next": false, // имеет ли страница следующую страницу (является ли непоследней в списке страниц)
      "has_previous": false, // имеет ли страница предыдующую страницу (является ли непервой в списке)
      "has_other_pages": false, // есть ли в списке страниц другие страницы (не является ли страница единственной)
      "next_page_number": null, // номер следующей страницы в списке
      "previous_page_number": null, // номер предыдущей страницы
      "start_index": 1, // индекс страны (в списке стран), отображаемой первой на странице
      "end_index": 1, // индекс страны (в списке стран), отображаемой последней на странице
      "total_count": 249, // предположительно, общее число всех существующих стран (видимо по ISO 3166-1)
      "selected_count": 1, // количество выбранных стран, то есть стран с запрошенным языком
      "pages": 1 // число страниц, содержащих страны с запрошенным языком
    }
  },
  "redirect": "",
  "locale": "en", // локаль, то есть информация о региональных настройках сервера
  "exc_stack": "", // видимо, стэк исполнения, то есть стэк вызовов внутренних функций сервера
  "debug": [], // отладочная информация
  "user_groups": "", // группы, в которые входит пользователь, под которым выполнялся запрос на сервер
  "user_perms": "" // права пользователя, под которым выполнялся запрос на сервер
}


# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
