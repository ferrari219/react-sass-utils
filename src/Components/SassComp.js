import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './SassComp.module.scss';

const cx = classNames.bind(styles);

class SassComp extends Component {
    render() {
        return (
            <div className={cx('box','b')}>
              SassComp  
            </div>
        );
    }
}

export default SassComp;