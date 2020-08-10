import React from "react";
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css'

const InputItem = () => (<div className={styles.input}>
    <TextField
        label="Введите название дела"
        id="margin-normal"
        margin="normal"
    />
</div>);

export default InputItem;