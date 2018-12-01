import React , { Component } from 'react';
import { View } from 'react-native';
import { Validate,TextField } from "../form"
import { Container, Item, Content, Button, Text  } from 'native-base';
import { Field,reduxForm } from 'redux-form';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false
    };
  }
  async componentWillMount() {
      this.setState({isReady: true});
    }

  render(){
    return (
      <Container style= {{ backgroundColor: "#eafcf9"}}>
       <Content padder>
          <TextField name='email' label='Enter Username' type="default" />
          <TextField name='password' label='Enter PassWord' type="password" />
          <Button style= {{ margin: 10 }} block primary onPress= { this.props.handleSubmit }>
          <Text>Login</Text>
        </Button>
      </Content>
    </Container>    )
  }
}
export default reduxForm({
  form: 'login', 
  Validate
})(LoginForm)