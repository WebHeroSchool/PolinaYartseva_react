import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";

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
    <div>
        <h1>Важные дела:</h1>
        <InputItem />
        <ItemList items={items}/>
        <Footer count={1} />
    </div>);
}

export default App;
