<template lang="pug">
.layout
    nuxt-loading-indicator(color="green" :height="7" :duration="7" :throttle="0")
    nuxt-page(keep-alive key="mainPage")
</template>

<style lang="scss" scoped>
.layout {
    position: relative;
    display: grid;
    grid-template-rows: 1fr;
    background-image: url('../static/img/bg-summer-forest-desktop.webp');
    
    @include mq(559) {
        background-image: url('../static/img/bg-summer-forest-mobile.webp');
    }

    @include mq(559, $maxMobileWidth) {
        background-image: url('../static/img/bg-summer-forest-fablet.webp');
    }

    @include mq($maxMobileWidth, $maxTabletWidth) {
        background-image: url('../static/img/bg-summer-forest-tablet.webp');
    }

    background-size: cover;
    background-position: center top;
    object-fit: cover;
    background-repeat: repeat;
    min-height: 100vh;

    &__video {
        &-container {
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: -50px;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        position: absolute;
        top: -52px;
        left: calc((100% - 1440px) / 2);
        width: 1440px;
    }
}
</style>
