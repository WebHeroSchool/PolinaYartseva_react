import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from './Item.module.css';

class Item extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() => console.log('interval'), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const { value, isDone, onClickDone, onClickDelete, id } = this.props;
        return (<div>
            <div>
                <Checkbox
                checked={Item.isDone}
                onClick={() => onClickDone(id)}
                />
            </div>
            <div className={classnames({
                [styles.item]: true,
                [styles.done]: isDone
            })
            }>
            {value}
            </div>
            <div className={styles.delete}>
                <DeleteOutlinedIcon
                    onClick={() => onClickDelete(id)}
                />
            </div>
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
