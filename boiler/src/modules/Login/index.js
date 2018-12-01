import React, {Component} from 'react';
import { View } from 'react-native'
import LoginForm from "./../../Components/login/loginform"
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
  render() {
  	return (
    <View style= {{ margin: 0 ,height:'100%'  }} >
	   	<LoginForm onSubmit = {(values)=> { console.log(values);}}/>
    </View>); 
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Page);