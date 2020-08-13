import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css'

class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick =() => {
        this.setState({
            inputValue: ''
        });

        this.props.onClickAdd(this.state.inputValue);
    }

    render() {
        const { onClickAdd } = this.props;

        return (<div className={styles.input}>
                <TextField
                    label="Введите название дела"
                    id="margin-normal"
                    margin="normal"
                    fullWidth
                    value={this.state.inputValue}
                    onChange={event => this.setState({inputValue: event.target.value})}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={this.onButtonClick}
                >
                    Добавить
                </Button>
            </div>);
    }
}


export default InputItem;