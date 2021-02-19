export const counter = {
    increment: () => {
        return {
            type: "INCREMENT",
        };
    },
    decrement: () => {
        return {
            type: "DECREMENT",
        };
    },
};
