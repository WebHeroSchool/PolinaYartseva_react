import React from "react";
import styles from './Footer.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = ({ count }) => (<div>
    <p className={styles.total}>незавершенных дел: {count}</p>
    <div className={styles.tabs}>
        <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
        >
            <Tab label="Все" />
            <Tab label="Незавершенные" />
            <Tab label="Завершенные" />
        </Tabs>
    </div>

</div>);

export default Footer;