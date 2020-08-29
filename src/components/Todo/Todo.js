import React, { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";

import styles from './Todo.module.css';

const Todo = () => {
    const initialState = {
        newItemList: JSON.parse(localStorage.getItem("todoItems")) || [],
        filter: 'all',
        count: JSON.parse(localStorage.getItem("count")) || 0,
        items: []
    };

    const [items, setItems] = useState(initialState.items);
    const [count, setCount] = useState(initialState.count);
    const [filter, setFilter] = useState(initialState.filter);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
        localStorage.setItem("count", JSON.stringify(count));
    }, [items,count]);

    const onClickDone = id => {
        const newItemList = items.map(item => {
            const newItem = { ...item };
            if (item.id === id) {
                newItem.isDone = !item.isDone;
                if (newItem.isDone){
                    setCount(count -1)
                } else {
                    setCount(count +1)
                }
            }

            return newItem;
        });

        setItems(newItemList);
    };

    const onClickAdd = value => {
        const newItemList = [
            ...items,
            {
                value: value,
                isDone: false,
                id: items.length + 1
            }
        ];
        setItems(newItemList);
        setCount((count) => count + 1);
    };

    const onClickDelete = (id, done) => {
    const newItemList = items.filter(item => item.id !== id);
    if(done === false){
        setCount(count -1)
    }
    setItems(newItemList);
    };

    const filterItems = () => {
        if (filter === 'active') {
            return items.filter(item => !item.isDone);
        } if (filter === 'done'){
            return items.filter(item => item.isDone);
        }
        return items;
    };

    const changeFilter = (name) => {
        setFilter(name)
    };

    return (
        <div>
            <h1 className={styles.title}>todo list</h1>
            <InputItem onClickAdd={onClickAdd}
                       items={items} />
            <ItemList items={items}
                      onClickDone={onClickDone}
                      onClickDelete={onClickDelete}
                      filter={filter}
                      filterItems={filterItems}
                      changeFilter={changeFilter} />
            <Footer count={items.length}
                    filter={filter}
                    changeFilter={changeFilter}
                    filterItems={filterItems} />
        </div>
    );
};

export default Todo;