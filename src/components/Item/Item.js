import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from './Item.module.css';

class Item extends React.Component {
    render() {
        const { value, isDone, onClickDone, onClickDelete, id, } = this.props;
        return (<div className={styles.item}>
            <div>
                <Checkbox
                checked={isDone}
                onClick={() => onClickDone(id)}
            />
            </div>
            <div className={classnames({
                [styles.item_true]: true,
                [styles.item_done]: isDone
                })
            }
                >
            {value}
            </div>
            <DeleteOutlinedIcon
                onClick={() => onClickDelete(id, isDone)}
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
    ]),
    isDone: PropTypes.bool,
    id: PropTypes.number,
    onClickDone: PropTypes.func,
    onClickDelete: PropTypes.func
};

export default Item;
