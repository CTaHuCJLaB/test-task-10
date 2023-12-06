export default () => {
    let result = false;
    if (process.client) {
        const htmlElement = document.querySelector('html');
        if (
            window
                .getComputedStyle(htmlElement)
                .flexGrow === '1'
        ) {
            result = true;
        }
    }

    return result;
}