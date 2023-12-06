export default () => ({
    data() {
        return {
            playingTrackDataRow: null,
            isPlayingMustBeStopped: false,
        };
    },
    methods: {
        onPlayingTriggered(dataRow) {
            if (this.playingTrackDataRow && dataRow !== this.playingTrackDataRow) {
                this.isPlayingMustBeStopped = true;
            }
        },
        onPlayingStarted(dataRow) {
            if (dataRow !== this.playingTrackDataRow) {
                this.isPlayingMustBeStopped = false;
                this.playingTrackDataRow = dataRow;
            }
        },
        onPlayingPaused() {
            this.isPlayingMustBeStopped = false;
        },
    },
});