import React from "react";
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div>
        <p className={styles.total}>Невыполненных дел: {count}</p>
    </div>);

export default Footer;