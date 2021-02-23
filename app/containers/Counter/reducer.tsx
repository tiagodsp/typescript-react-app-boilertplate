const counterReducer = (
    state = { value: 10 },
    action,
) => {
    switch (action.type) {
    case 'INCREMENT':
        return { value: state.value + 1 };
    case 'DECREMENT':
        return { value: state.value - 1 };
    default:
        return state;
    }
};

export default counterReducer;
