import React from "react";
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, onClickDelete, id }) => (<div>
    <Checkbox
        checked={Item.isDone}
        onClick={() => onClickDone(id)}
    />
    <span className={classnames({
        [styles.item]: true,
        [styles.done]: isDone
        })
    }>
        {value}
    </span>
     <div className={styles.delete}>
         <DeleteOutlinedIcon
             onClick={() => onClickDelete(id)}
         />
     </div>
</div>
);

Item.defaultProps = {
    isDone: false,
};

export default Item;
