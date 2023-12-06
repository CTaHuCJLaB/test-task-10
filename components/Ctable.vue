<template lang="pug">
base-ctable(:countries="store.countries")
</template>

<script>
import { useStore } from '@/stores/store';
import { createStringPropConfig } from '@/modules/propConfigs';

const buildRequestObject = (iso_3166_1_a2 = '') => ({
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
    },
    body: JSON.stringify({
        filters: {
            iso_3166_1_a2,
        },
        paginate: {
            page: 1,
            pp_items: 300
        }
    })
});

export default {
    props: {
        filter: createStringPropConfig(),
    },
    async setup() {
        const store = useStore();
        const { data: responseData, error } = await useAsyncData(
            'countries', () => $fetch('https://devops100.site/test/', buildRequestObject())
        );
        if (!error) {
            const { page_data: pageData } = responseData;
            store.countries = pageData.data;
        } else console.log(error);

        return { store };
    },
    async created() {
        // приходится дублировать запрос здесь, т.к., по всей видимости, Nuxt не умеет использовать
        // POST - запрос на стороне клиента для получения данных с сервера
        const response = await fetch('https://devops100.site/test/', buildRequestObject());

        if (response.ok) {
            const responseData = await response.json()
            const { page_data: pageData } = responseData;
            this.store.countries = pageData.data;
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    },
    watch: {
        async filter(newValue, oldValue) {
            const response = await fetch(
                'https://devops100.site/test/',
                buildRequestObject(this.filter),
            );
            if (response.ok) {
                const responseData = await response.json()
                const { page_data: pageData } = responseData;
                this.store.countries = pageData.data;
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        },
    },
};
</script>