import React from 'react';
import styles from '../styles';

import { YEAR } from '../../libs/helpers';

class Footer extends React.PureComponent {
    render() {
        return (
            <div style={styles.footer}>
                <h5>&copy; All right reserved {YEAR}</h5>
            </div>
        );
    }
}

export default Footer;
