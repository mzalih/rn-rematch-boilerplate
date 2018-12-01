import React, {Component} from 'react';
import { View,ActivityIndicator,Text } from 'react-native'
import {styles} from "./../../style"
import { connect } from "react-redux";
import { compose } from "recompose";

const mapDispatchToProps = ({ splashModal }) => {
  return {
    ...splashModal
  };
};

const mapStateToProps = ({ splashModal }) => {
  return {
    ...splashModal
  };
};

class Page extends React.Component {
	
	static navigationOptions = {
	        title: "APP TITLE",
	        headerStyle: styles.headerStyle,
	        headerTintColor: "#FFFFFF",
	        headerTitleStyle: { fontWeight: 'bold', },
	    }

 			render(){
 					 if(this.props.loading){
					      return (<View style={[styles.container, styles.horizontal]}>
					        <ActivityIndicator size="large" color="#FFFFFF" />
					      </View>);
					    }
					  	return (
					    <View style={[styles.container, styles.horizontal]} >
					    	<Text>LOADING ERROR</Text>
					    </View>); 
				}
                componentDidMount() {
                	// UPDATE FCM TOKEN HERE  , WAIT FOR FCM TOKEN CHANGE ETC
               		this.props.checkLogedIn();
                }
                componentWillReceiveProps(nextProps){
			        if (nextProps.loginStatus) {
			            this.props.navigation.replace('Home')
			        }else{
			        	this.props.navigation.replace('Login')
			        }
		  		}
               

}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Page);