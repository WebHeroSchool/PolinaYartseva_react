import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css'
import PropTypes from "prop-types";

class InputItem extends React.Component {
    state = {
        value: '',
        errorMessage: '',
        isError: false,
        items: []
    };

    onButtonClick = () => {
        if (this.props.items.find(item => this.state.value === item.value)){
            this.setState({error: true , errorMessage: 'Error. This todo is already exist'});
        } else if (this.state.value === '') {
            this.setState({error: true , errorMessage: 'Error. Input todo'});
        } else {
            this.props.onClickAdd(this.state.value);
            this.setState({
                value: '',
                errorMessage: '',
                isError: false
            });
        }
    }

    changeToUppercase = event => {
        this.setState({ value: event.target.value.toUpperCase()});
    };

    render() {

        return (<div className={styles.input}>
                <TextField
                    label="Введите название дела"
                    id="margin-normal"
                    margin="normal"
                    fullWidth
                    helperText={this.state.errorMessage}
                    value={this.state.value}
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