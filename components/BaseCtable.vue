<template lang="pug">
table.country-table
    tbody.country-table__body
        tr.country-table__header
            td.country-table__header-cell Язык страны по ISO 3166-1 a2
            td.country-table__header-cell Аббревиатура страны по ISO 3166-1 a3
            td.country-table__header-cell Цифровой код страны по ISO 3166-1 numeric
            td.country-table__header-cell Официальное название (En)
            td.country-table__header-cell Сокращенное название
            td.country-table__header-cell Судоходная страна
        tr.country-table__datafor(v-for="country in countries")
            td.country-table__data-cell {{ country.iso_3166_1_a2 }}
            td.country-table__data-cell {{ country.iso_3166_1_a3 }}
            td.country-table__data-cell {{ country.iso_3166_1_numeric }}
            td.country-table__data-cell.country-table__cell--name {{ country.name }}
            td.country-table__data-cell.country-table__cell--name {{ country.printable_name }}
            td.country-table__data-cell {{ country.is_shipping_country ? 'Да' : 'Нет'}}
</template>

<script>
import { createArrayPropConfig } from '@/modules/propConfigs';

export default {
    props: {
        countries: createArrayPropConfig(),
    }
}
</script>

<style lang="scss">
.country-table {
    width: 1200px;
    font-size: 14px;
    text-align: center;

    &__header {
        font-weight: 700;
    }
    
    &__header-cell {
        padding: 5px;
        border: 1px solid #59621ec0;
        background-color: #5864075e;
    }

    &__data-cell {
        border: 1px solid #59621ec0;
    }

    &__cell--name {
        text-align: left;
    }
}
</style>