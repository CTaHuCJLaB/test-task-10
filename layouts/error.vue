<template>
    <div class="__nuxt-error-page">
        <div class="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
                <path
                    d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                />
            </svg>

            <div class="title">{{ message }}</div>
            <p v-if="statusCode === 404" class="description">
                <a v-if="typeof $route === 'undefined'" class="error-link" href="/" />
                <NuxtLink v-else class="error-link" to="/">Назад на главную</NuxtLink>
            </p>

            <p v-else class="description">
                An error occurred while rendering the page. Check developer tools console for
                details.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NuxtError',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    head() {
        return {
            title: this.message,
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
                },
            ],
        };
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500;
        },
        message() {
            return this.error.message || 'Error';
        },
    },
};
</script>

<style>
.__nuxt-error-page {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-family: sans-serif;
    font-weight: 100 !important;
    text-align: center;
    color: #47494e;
    background: #f7f8fb;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
}

.__nuxt-error-page .error {
    max-width: 450px;
}

.__nuxt-error-page .title {
    font-size: 1.5rem;
    color: #47494e;
    margin-top: 15px;
    margin-bottom: 8px;
}

.__nuxt-error-page .description {
    line-height: 21px;
    color: #7f828b;
    margin-bottom: 10px;
}

.__nuxt-error-page a {
    text-decoration: none;
    color: #7f828b !important;
}

.__nuxt-error-page .logo {
    position: fixed;
    bottom: 12px;
    left: 12px;
}
</style>
