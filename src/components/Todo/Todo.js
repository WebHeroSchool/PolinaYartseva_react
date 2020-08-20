import React, { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";

import styles from './Todo.module.css';

const Todo = () => {
    const initialState = {
        items: []
    };

    useEffect(() => {
        console.log('componentDidMount');
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate');
    });

    const [items, setItems] = useState(initialState.items);
    const [count, setCount] = useState(initialState.count);
    const [filter, setFilter] = useState(initialState.filter);

    const onClickDone = id => {
        const newItemList = items.map(item => {
            const newItem = { ...item };
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        setItems(newItemList);
    };

    const onClickDelete = id => {
        const newItemList = items.filter(item => item.id !== id);

        setItems(newItemList);
        setCount((count) => count + 1);
    };

    const onClickAdd = value => {
        const newItemList = [
            ...items,
            {
                value,
                isDone: false,
                id: items.length + 1
            }
        ];
        setItems(newItemList);
        setCount((count) => count + 1);
    };

    const filterItems = (items, filter) => {
        if (filter === 'all') {
            return items;
        } else if (filter === 'active') {
            return items.filter((item) => (!item.isDone));
        } else if (filter === 'done') {
            return items.filter((item) => item.isDone);
        }
        return items;
    };

    const onFilterChange = (filter) => {
        setFilter(filter);
    };

    const searchItem = (todoItem) => {
        let res = todoItem.filter(item=>!item.isDone);
        return res.length;
    };

    const addItemToLocalStorage = (item, count) => {
        let sItem = JSON.stringify(item);
        localStorage.setItem("todoItem", sItem);
        localStorage.setItem("count", JSON.stringify(count));
    };

    addItemToLocalStorage (items, count);
    const visibleItems = filterItems(items, filter);
    let activeItem = searchItem(items);

    return (
        <div>
            <h1 className={styles.title}>список дел</h1>
            <InputItem onClickAdd={onClickAdd} />
            <ItemList items={items}  onClickDone={onClickDone} onClickDelete={onClickDelete}/>
            <Footer count={items.length} onFilterChange={onFilterChange} />
        </div>
    );
};

export default Todo;