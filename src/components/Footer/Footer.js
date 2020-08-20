import React from "react";
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = ({ count }) => (<div>
    <p className={styles.total}>незавершенных дел: {count}</p>
    <div>
        <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
        >
            <Tab label="all" />
            <Tab label="in progress" />
            <Tab label="done" />
        </Tabs>
    </div>
</div>);

Footer.defaultProps ={
    count: 0
}

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;