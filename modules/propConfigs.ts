const createPropCommonConfig = (
    type, defaultValue,
) => ({
    type,
    default: defaultValue,
});

export const truePropConfig = createPropCommonConfig(
    Boolean, true,
);

export const falsePropConfig = createPropCommonConfig(
    Boolean, false,
);

export const createNumberPropConfig = (
    defaultValue = 0,
) =>
    createPropCommonConfig(
        Number,
        defaultValue,
    );

export const createStringPropConfig = (
    defaultValue = '',
) =>
    createPropCommonConfig(
        String,
        defaultValue,
    );

export const createArrayPropConfig = (
    defaultValue = () => [],
) =>
    createPropCommonConfig(
        Array,
        defaultValue,
    );

export const createObjectPropConfig = (
    defaultValue = () => ({}),
) =>
    createPropCommonConfig(
        Object,
        defaultValue,
    );

export default () => ({
    createPropCommonConfig,
    createNumberPropConfig,
    createStringPropConfig,
    createArrayPropConfig,
    createObjectPropConfig,
});
