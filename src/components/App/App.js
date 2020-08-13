import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';
import './fonts/fonts.css';

class App extends React.Component {
    state = {
        items: [
            {
                value: 'Выполнить дз №19',
                isDone: false,
                id: 1
            },
            {
                value: 'Выполнить дз №20',
                isDone: false,
                id: 2
            },
            {
                value: 'Прослушать вебинар',
                isDone: true,
                id: 3
            }
        ],
        count: 6
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };

            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        this.setState( {items: newItemList });
    };

    onClickDelete = id => this.setState(state => ({ items: state.items.filter(item => item.id !== id)}));

    onClickAdd = value => this.setState(state => ({
        items: [
            ...state.items,
            {
                value,
                isDone: false,
                id: state.count + 1
            }
        ],
        count: state.count + 1
    }))

    render() {
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>список дел</h1>
                <InputItem onClickAdd={this.onClickAdd} />
                <ItemList items={this.state.items}  onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
                <Footer count={this.state.count} onClickFooter={this.onClickFooter} />
            </div>);
  }
}

export default App;
