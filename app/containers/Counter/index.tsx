import * as React from 'react';
import { store } from '../..';
import * as counter from './actions';

export default class Counter extends React.Component<{}, { value: number }> {
    // eslint-disable-next-line camelcase
    UNSAFE_componentWillMount() {
        this.setState({ value: store.getState().counter.value });
        store.subscribe(() => {
            this.setState({ value: store.getState().counter.value });
        });
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <p>
                    COUNTER:
                    {value}
                </p>
                <button
                    type="submit"
                    onClick={() => {
                        store.dispatch(counter.increment());
                    }}
                >
                    +
                </button>
                <button
                    type="submit"
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
