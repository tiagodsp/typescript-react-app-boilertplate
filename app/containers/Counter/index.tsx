import React from "react";
import { useStore } from "react-redux";
import { store } from "../../";
import { counter } from "./actions";

export default class Counter extends React.Component<{}, { value: number }> {
    componentWillMount() {
        this.setState({ value: store.getState().counter.value });
        store.subscribe(() => {
            this.setState({ value: store.getState().counter.value });
        });
    }

    render() {
        return (
            <div>
                <p>COUNTER: {this.state.value}</p>
                <button
                    onClick={() => {
                        store.dispatch(counter.increment());
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        store.dispatch(counter.decrement());
                    }}
                >
                    -
                </button>
            </div>
        );
    }
}
