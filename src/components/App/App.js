import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import './App.css';
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
    <div className="wrap">
        <h1 className="wrap__title">Важные дела:</h1>
        <InputItem />
        <ItemList items={items} className="wrap__item-list"/>
        <Footer count={1} className="footer" />
    </div>);
}

export default App;
