// Imports
import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-grid-system';
import {
    Card,
} from '@blueprintjs/core';

// CSS
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import style from './styles/style.scss';

const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;   
`;

export default class LateralNavbar extends React.Component {
    render() {
        return (
            <Card className={style.navbar}>
                <div>
                    <Button>
                        MY HOME
                    </Button>
                </div>
            </Card>
        );
    }
}
