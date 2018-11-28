import React, {Component} from 'react';
import { View,Text,Button,TextInput } from 'react-native'

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
  	console.log(this.props);
    return (<View>
	    	<Text>Hello</Text>
	    	 <TextInput
			        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			        onChangeText={(text) => this.props.text = text }
			        value={this.props.text}
			      />
			      <TextInput
			        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			        onChangeText={(text) => this.setState({text})}
			        value={this.props.text}
			      />
	    
	    	<Button
				  onPress={ ()=> { this.props.login() } }
				  title="Learn More"
				  color="#841584"
				  accessibilityLabel="Learn more about this purple button"
				/>
    </View>); 
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Page);