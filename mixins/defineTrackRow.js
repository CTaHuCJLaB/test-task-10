import { createObjectPropConfig, falsePropConfig } from '@/modules/propConfigs.ts';

export default () => ({
    props: {
        track: createObjectPropConfig(),
        isPlayingMustBeStopped: falsePropConfig,
    },
    data() {
        return {
            isHandleMustBeShown: false,
        };
    },
    computed: {
        formatedTrackPublicationDate() {
            return new Intl.DateTimeFormat('ru')
                .format(new Date(this.track.publishedAt));
        },
    },
    watch: {
        async isPlayingMustBeStopped(value) {
            if (value) {
                try {
                    if (this.isAudioPlaying) {
                        await this.$refs.player.audio.pause();
                        this.isAudioPlaying = false;
                        this.$refs.player.isHandleMustBeShown = false;
                        this.$refs.player.audio.currentTime = 0;
                    }
                } catch (error) {
                    alert(error.message, error.code);
                }
            } else if (!this.isAudioPlaying) {
                this.$refs.player.isHandleMustBeShown = false;
                this.$refs.player.audio.currentTime = 0;
            }
        },
    },
});