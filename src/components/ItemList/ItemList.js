import React from "react";
import Item from "../Item/Item";
import styles from "../ItemList/ItemList.module.css";
import PropTypes from "prop-types";

const ItemList = ({ onClickDone, onClickDelete, filterItems }) => (
    <ul className={styles.itemList}> {
        filterItems().map(item => <li key={item.value} className={styles.itemList__item}>
            <Item
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
            />
            </li>)}
    </ul>
);

ItemList.defaultProps={
    items: {
        value: "Важные дела отсутствуют"
    }
};

Item.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isDone: PropTypes.bool,
    id: PropTypes.number
};

export default ItemList;
