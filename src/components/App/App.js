import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";

const todoItem = 'Выполнить дз №19';
const App = () => (
    <div>
        <h1>Важные дела:</h1>
        <InputItem />
        <ItemList todoItem={todoItem}/>
        <Footer count={5} />
    </div>);

export default App;
