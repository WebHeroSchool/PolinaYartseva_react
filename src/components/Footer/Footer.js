import React from "react";
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = ({ count, filter, changeFilter }) => (<div className={styles.footer}>
        <p className={styles.total}>pending todos: {count}</p>
    <div>
        <Tabs className={styles.tabs}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
        >
            <Tab label="all" className={filter === 'all' ? styles.active : styles.item}
                 onClick={() => changeFilter('all')} />
            <Tab label="in progress" className={filter === 'active' ? styles.active : styles.item}
                 onClick={() => changeFilter('active')} />
            <Tab label="done" className={filter === 'done' ? styles.active : styles.item}
                 onClick={() => changeFilter('done')} />
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