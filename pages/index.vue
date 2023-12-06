<template lang="pug">
main.main
    section.section
        h2.section__h2 Фильтрация:
        p.section__p
            label.section__label ISO 3166-1 a2: 
                input.section__field(type="text" ref="filterInput")
        p.section__p.section__p--button-pane
            button.section__button(type="button" @click="onServerFilterButtonClick")
                | Применить серверный фильтр
            button.section__button(type="button" @click="filter=''")
                | Сбросить серверный фильтр
            button.section__button(type="button" @click="onClientFilterButtonClick")
                | Применить клиентский фильтр
        ctable(:filter="filter")
</template>

<script>
definePageMeta({
    layout: "default",
});

export default {
    data() {
        return {
            filter: '',
        };
    },
    methods: {
        onServerFilterButtonClick() {
            this.filter = this.$refs.filterInput.value;
        },
        onClientFilterButtonClick() {
            this.$router
                .push('/country/' + this.$refs.filterInput.value);
        },
    }
}
</script>
<style lang="scss" scoped>
.section {
    &__h2 {
        width: 285px;
        font-size: 23px;
        line-height: 25px;
        font-weight: 500;
        text-align: center;
        color: #555c0c;
        margin-bottom: 27px;
    }

    &__p {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 25px;

        &--button-pane {
            width: 655px;
            text-align: center;
        }
    }

    &__label {
        font-size: 17px;
    }

    &__field {
        min-width: 0;
        width: 150px;
        height: 29px;
        color: #60700f;
        border: 2px solid #5b5f21ce;
        font-weight: 600;
    }

    &__button {
        width: 205px;
        min-height: 36px;
        color: #4d5306;
        padding: 8px 29px;
        font-family: 'Roboto Slab', 'Times New Roman', serif;
        font-weight: 500;
        background-color: #5864075e;
        cursor: pointer;        

        &:hover,
        &:active {
            background-image: linear-gradient(#768d25f8, #b97d04f8);
            transition: background-color 0.4s;
        }
    }
}
</style>
