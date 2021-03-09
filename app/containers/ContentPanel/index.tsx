import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {
    Card,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

export default class ContentPanel extends React.Component {
    render() {
        return (
            <Card style={{ height: '100%' }}>
                <p>Content Here</p>
            </Card>
        );
    }
}
