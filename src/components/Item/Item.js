import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from './Item.module.css';

class Item extends React.Component {

    render() {
        const { value, isDone, onClickDone, onClickDelete, id } = this.props;
        return (<div className={styles.item}>
            <div>
                <Checkbox
                checked={Item.isDone}
                onClick={() => onClickDone(id)}
                />
            </div>
            <div className={classnames({
                [styles.item_true]: true,
                [styles.item_done]: isDone
            })
            }>
            {value}
            </div>
            <DeleteOutlinedIcon
                onClick={() => onClickDelete(id)}
            />
        </div>
        )
    }
}

Item.defaultProps = {
    isDone: false,
};

Item.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Item;
