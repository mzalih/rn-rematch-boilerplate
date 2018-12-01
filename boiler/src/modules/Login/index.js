import React, {Component} from 'react';
import { View ,ActivityIndicator} from 'react-native'
import LoginForm from "./../../Components/login/loginform"
import {styles} from "./../../style"
import { connect } from "react-redux";
import { compose } from "recompose";

const mapDispatchToProps = ({ loginModal }) => {
  return {
    ...loginModal
  };
};

const mapStateToProps = ({ loginModal }) => {
  return {
    ...loginModal
  };
};

class Page extends React.Component {

  static navigationOptions = {
        title: "PAGE NAME",
        headerStyle: styles.headerStyle,
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', },
    }

  componentWillReceiveProps(nextProps){
        if (nextProps.loginStatus) {
            this.props.navigation.replace('Home')
        }
  }
  render() {
    if(this.props.loading){
      return (<View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>);
    }
  	return (
    <View style={[ styles.horizontal]} >
	   	<LoginForm onSubmit = {(values)=> { this.props.login(values)}}/>
    </View>); 
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Page);