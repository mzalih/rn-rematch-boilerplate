import React, {Component} from 'react';
import { View,ActivityIndicator,Text } from 'react-native'
import {styles} from "./../../style"
import { connect } from "react-redux";
import { compose } from "recompose";
import UserList from "./../../components/userslist"

const mapDispatchToProps = ({ listModal }) => {
  return {
    ...listModal
  };
};

const mapStateToProps = ({ listModal }) => {
  return {
    ...listModal
  };
};

class Page extends React.Component {
	
	static navigationOptions = {
	        title: "FRIENDS",
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
					   if(this.props.userData.results){
					   	return (
						    <View style={[styles.container, styles.horizontal]} >
						    	<UserList data  ={  this.props.userData.results} />
						    </View>); 
					   } 
					  	return (
					    <View style={[styles.container, styles.horizontal]} >
					    	<Text>ERROR</Text>
					    </View>); 
				}
                componentDidMount() {
               		this.props.fetchUsers();
                }
                componentWillReceiveProps(nextProps){
			        if (nextProps.loginStatus) {
			           // this.props.navigation.replace('Home')
			        }else{
			        //	this.props.navigation.replace('Login')
			        }
		  		}
               

}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Page);