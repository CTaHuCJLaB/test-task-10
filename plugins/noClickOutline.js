import $ from 'jquery';

export default defineNuxtPlugin(() => {
    if (process.client) {
        let isFocusWithTab = false;

        const $document = $(document);

        $document.on('keydown', ({ key }) => {
            if (key === 'Tab') {
                isFocusWithTab = true;
            }
        });

        $document.on('mousedown', ({ target }) => {
            const $activeElement = $(':focus');
            if ($activeElement[0] === target || $activeElement.has(target)) {
                $activeElement.css('outline', 'none');
            }
            isFocusWithTab = false;
        });

        $document.on('focusin', ({ target }) => {
            if (isFocusWithTab) {
                if (
                    target.tagName === 'INPUT' &&
                    (target.type === 'checkbox' || target.type === 'radio')
                ) {
                    $(`label[for=${target.id}]`).parent().css('outline', '3px solid #c9a900');
                } else {
                    $(target).css('outline', '3px solid #c9a900');
                }
            } else {
                $(target).css('outline', 'none');
            }
        });

        $document.on('blur', '*', ({ target }) => {
            if (
                target.tagName === 'INPUT' &&
                (target.type === 'checkbox' || target.type === 'radio')
            ) {
                $(`label[for=${target.id}]`).parent().css('outline','none');
            } else {
                $(target).css('outline', 'none');
            }
        });
    }
});
