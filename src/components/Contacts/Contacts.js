import React from 'react';
import styles from './Contacts.module.css'
import './Icons/mail.png';
import './Icons/call.png';
import './Icons/linkedin.png';
import './Icons/telegram.png';
import './Icons/whatsapp.png';

const Contacts = () => (<div className={styles.wrap}>
    <h1 className={styles.title}>Contacts</h1>
    <div className={styles.content}>
        <div className={styles.item}>
            <img src={require('./Icons/mail.png')} alt="e-mail" className={styles.icon} />
            <a className={styles.link} href='mailto:polinayartseva.web@gmail.com'>polinayartseva.web@gmail.com</a>
        </div>
        <div className={styles.item}>
            <img src={require('./Icons/call.png')} alt="tel" className={styles.icon} />
            <p>+2-01-222-933-567</p>
        </div>
        <div className={styles.item}>
            <img src={require('./Icons/linkedin.png')} alt="linkedin" className={styles.icon} />
            <a className={styles.link} href='https://www.linkedin.com/in/polinayartseva'>https://www.linkedin.com/in/polinayartseva</a>
        </div>
        <div className={styles.item}>
            <img src={require('./Icons/telegram.png')} alt="telegram" className={styles.icon} />
            <a className={styles.link} href='https://t.me/Polina_yartseva'>+7-952-710-62-20</a>
        </div>
        <div className={styles.item}>
            <img src={require('./Icons/whatsapp.png')} alt="whatsapp" className={styles.icon} />
            <a className={styles.link} href=' https://wa.me/201222933567'>+2-01-222-933-567</a>
        </div>
    </div>
</div>
);

export default Contacts;