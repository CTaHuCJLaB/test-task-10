<template lang="pug">
span.base-control(
    :class="{ 'is-visually-hidden': !caption.text }"
)
    span.visually-hidden(v-if="description")
        | {{description}}
    span(
        v-if="caption.text"
        :class="caption.classes"
        :aria-hidden="!!description"
    )
        | {{caption.text}}
</template>

<script>
import _ from 'lodash';
import { falsePropConfig } from '@/modules/propConfigs';

export default {
    props: {
        isFocused: falsePropConfig,
    },
    setup() {
        const outerStateDefault = {
            description: '',
            caption: {
                text: '',
                classes: '',
            },
        };
        let outerControlState = inject(
            'outerControlState',
            outerStateDefault,
        );
        outerControlState = _.assign(
            outerStateDefault,
            outerControlState,
        );

        return outerControlState;
    },
    watch: {
        isFocused(newValue, oldValue) {
            if (!oldValue && newValue) {
                this.focus();
            }
        },
    },
    methods: {
        focus() {
            this.$parent
                .$refs.core.focus();
        },
    },
};
</script>
