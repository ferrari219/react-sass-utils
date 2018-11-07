import React, { Component } from 'react';
import styles from './SassComp.module.scss';

class SassComp extends Component {
    render() {
        return (
            <div className={styles.box}>
              SassComp  
            </div>
        );
    }
}

export default SassComp;