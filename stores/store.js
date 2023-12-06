
import { defineStore } from 'pinia'

export const strict = process.env.NODE_ENV !== 'production';

export const useStore = defineStore('store', {
    state: () => ({
        countries: [],
    }),
})

