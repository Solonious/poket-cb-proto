import React, { Component } from 'react';

import './Footer.css';
import { YEAR } from '../libs/helpers';

class Footer extends Component {

    render() {
        return (
            <div className="Footer">
                <h5>&copy; All right reserved {YEAR}</h5>
            </div>
        );
    }
}

export default Footer;
