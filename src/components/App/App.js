import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';
import './fonts/fonts.css';

const App = () => {
    const items = [
        {
            value: 'Выполнить дз №19'
        },
        {
            value: 'Выполнить дз №20'
        },
        {
            value: 'Прослушать вебинар'
        }
    ];
    return (
    <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem className={styles.input} />
        <ItemList items={items} className={styles.itemList} />
        <Footer count={1} className={styles.footer} />
    </div>);
}

export default App;
