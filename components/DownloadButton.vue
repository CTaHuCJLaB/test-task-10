<template lang="pug">
base-button(ref="baseButton")
</template>

<script>
export default {
    provide: {
        outerControlState:
            {
                caption: { text: 'Скачать' },
                description: 'Скачать приобретённые треки',
            },
    },
};
</script>

<style lang="scss" scoped>
:deep(.button__core) {
    width: 152px;
    min-height: 36px;
    color: #5b6209;
    background-image: linear-gradient(#5f7c145c, #546f125c);

    &:hover,
    &:active {
        background-image: linear-gradient(#768d25f8, #b97d04f8);
        transition: background-color 0.4s;
    }

    padding: 6px 29px;
    font-family: "Roboto Slab", "Times New Roman", serif;
    font-weight: 500;
    font-size: 16px;

    margin-top: 15px;
}
</style>
