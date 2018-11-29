import React , { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';
const validate = values => {
  const error= {};
  error.email= '';
  error.name= '';
  var ema = values.email;
  var nm = values.name;
  if(values.email === undefined){
    ema = '';
  }
  if(values.name === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }
  if(nm.length > 8){
    error.name= 'max 8 characters';
  }
  return error;
};
class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false
    };
    this.renderInput = this.renderInput.bind(this);
  }
  async componentWillMount() {
      this.setState({isReady: true});
    }
  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( 
      <Item error= {hasError}>
        <Input {...input}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }
  render(){
     const { submit} = this.props;
    return (
      <Container style= {{ backgroundColor: "#eafcf9"}}>
       <Content padder>
        <Field name="email" component={this.renderInput} />
        <Field name="name" component={this.renderInput} />
        <Button style= {{ margin: 10 }} block primary onPress= {submit}>
        <Text>Login</Text>
        </Button>
      </Content>
    </Container>    )
  }
}
export default reduxForm({
  form: 'login',
  validate
})(LoginForm)