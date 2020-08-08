import React from "react";
import Item from "../Item/Item";

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Выполнить задание №20'} /></li>
    <li><Item todoItem={'Прослушать вебинар'} /></li>
</ul>);

export default ItemList;
