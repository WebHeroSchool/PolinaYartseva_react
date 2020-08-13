import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css'

class InputItem extends React.Component {
    state = {
        inputValue: '',
        errorMessage: '',
        isError: false
    };

    onButtonClick = () => {
        if (this.state.inputValue !== '') {
            this.setState({
                inputValue: '',
                errorMessage: '',
                isError: false,
            });
            this.props.onClickAdd(this.state.inputValue);
        } else {
            this.setState({
                errorMessage: 'Ошибка. Введите дело',
                isError: true,
            });
        }
    };

    changeToUppercase = event => {
        this.setState({ inputValue: event.target.value.toUpperCase()});
    };

    render() {

        //const { onClickAdd } = this.props;

        return (<div className={styles.input}>
                <TextField
                    label="Введите название дела"
                    id="margin-normal"
                    margin="normal"
                    fullWidth
                    helperText={this.state.errorMessage}
                    value={this.state.inputValue}
                    onChange={this.changeToUppercase}
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