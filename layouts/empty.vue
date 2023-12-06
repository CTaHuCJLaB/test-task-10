<template lang="pug">
.layout
    nuxt-page
</template>

<style lang="scss" scoped>
.layout {
    display: grid;
    justify-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    
    @include mq(812) {
        padding-top: 0;
        padding-bottom: 0;
    }
}
</style>