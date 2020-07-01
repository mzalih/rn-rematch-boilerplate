import React , { Component } from 'react';
import { validate ,TextField } from "../form"
import { Container, Content, Button, Text  } from 'native-base';
import { reduxForm } from 'redux-form';
import {styles} from "./../../style"


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
      <Container style = {styles.transparent}>
       <Content padder>
          <TextField name='email' label='Enter Username' type="default" />
          <TextField name='password' label='Enter PassWord' type="password" />
          <Button style= {{ margin: 10 }} block primary onPress= { this.props.handleSubmit }>
          <Text>Login</Text>
        </Button>
      </Content>
    </Container> )
  }
}
export default reduxForm({
  form: 'login', 
  validate
})(LoginForm)