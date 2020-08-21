import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css'
import PropTypes from "prop-types";

class InputItem extends React.Component {
    state = {
        inputValue: '',
        errorMessage: '',
        isError: false,
        items: []
    };

    onButtonClick = () => {
        if (this.state.inputValue !== '') {
            this.setState({
                inputValue: '',
                errorMessage: '',
                isError: false,
            });
            this.props.onClickAdd(this.state.inputValue);
        } else if (this.state.items.find(item => this.state.inputValue === item.inputValue)) {
            this.setState({
                errorMessage: 'Error. This todo is already exist',
                isError: true,
            });
        } else {
            this.setState({
                errorMessage: 'Error. Input todo',
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
                <Button className={styles.button}
                    variant="contained"
                    color="secondary"
                    onClick={this.onButtonClick}
                >
                    add
                </Button>
            </div>);
    }
}

InputItem.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default InputItem;