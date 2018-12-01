import React, { Component } from 'react';
import { View } from 'react-native'
import { Field } from 'redux-form'
import { Text, Item, Input, Label } from 'native-base';
import { required } from './form-validate'
import {styles} from "./../../style"

class FormTextItem extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
    }

    renderInput({ input, label, type, init, meta: { touched, error, warning } }) {
        let hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <View style = {{ marginBottom: 10 }}>
                <Item floatingLabel={init?false:true} error={hasError}>
                   {init?<Text/>: <Label>{label}</Label>}
                    <Input secureTextEntry={type == 'password' ? true : false} keyboardType={type == 'password' ? "default" : type} placeholder={init} {...input} />
                </Item>
                {(hasError && touched) ? <Text style = {[styles.errorText]}>{error}</Text> : <Text />}
            </View>
        )
    }


    render() {
        const { type, label, name, init } = this.props
        return (
            <View>
                <Field name={name} type={type} label={label} init={init} component={this.renderInput} />
            </View>
        );
    }
}



export default (FormTextItem)

