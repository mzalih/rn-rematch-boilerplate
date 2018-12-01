import React, { Component } from 'react';
import { View } from 'react-native'
import { Field } from 'redux-form'
import { Item, Picker, Label, } from 'native-base';
const submit = values => {
    console.log('submitting form', values)
}

class FormSelectItem extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
    }

    renderInput({ input: { onChange, value, ...inputProps }, label, children, ...pickerProps }) {
        return (
        <View>
            <Label>{label}</Label>
        <Picker
            selectedValue={value}
            onValueChange={value => onChange(value)}
            {...inputProps}
            {...pickerProps}
        >
            {children}
        </Picker>
        </View>
        );
    }
    render() {
        const { type, label, name } = this.props
        return (
            <View style={{ padding: 10 }} >
                <Field
                    name={name}
                    type={type}
                    label={label}
                    component={this.renderInput}
                    mode="dropdown"
                >
                    <Item label="30" value="30" />
                    <Item label="20" value="20" />
                    <Item label="10" value="10" />
                    <Item label="5" value="5" />
                </Field>
            </View>
        );
    }
}



export default (FormSelectItem)

