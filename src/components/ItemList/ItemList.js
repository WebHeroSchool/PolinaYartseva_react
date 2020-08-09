import React from "react";
import Item from "../Item/Item";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from "../ItemList/ItemList.module.css";

const ItemList = ({ items }) => (
    <ul className={styles.itemList}> {
        items.map(item =>
            <li key={item.value}>
                <Checkbox
                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                <Item
                    value={item.value}
                    isDone={item.isDone} />
                <div className={styles.delete}>
                    <DeleteOutlinedIcon />
                </div>
            </li>)}
    </ul>);

export default ItemList;
