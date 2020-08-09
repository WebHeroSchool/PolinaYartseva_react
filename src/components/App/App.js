import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';
import './fonts/fonts.css';

class App extends React.Component {
    render() {
        const items = [
            {
                value: 'Выполнить дз №19',
                isDone: true
            },
            {
                value: 'Выполнить дз №20',
                isDone: true
            },
            {
                value: 'Прослушать вебинар',
                isDone: false
            }
        ];
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>список дел</h1>
                <InputItem />
                <ItemList items={items} />
                <Footer count={1} />
            </div>);
    }
}

export default App;
