import React from 'react';
import LateralNavbar from 'containers/LateralNavbar';
import ContentPanel from 'containers/ContentPanel';
import { Row, Col } from 'react-grid-system';

import style from 'styles/style.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className={style.background}>
                <Row gutterWidth={4} style={{ height: '100%' }}>
                    <Col xs="content" style={{ height: '100%' }}>
                        <LateralNavbar />
                    </Col>
                    <Col>
                        <ContentPanel />
                    </Col>
                </Row>
            </div>
        );
    }
}
