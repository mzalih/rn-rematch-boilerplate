import React, {Component} from 'react';
import { View,ActivityIndicator } from 'react-native'

export default class Page extends React.Component {
 				render(){
                    return (<View><ActivityIndicator/></View>)
            	}
                componentDidMount() {
                	// UPDATE FCM TOKEN HERE  , WAIT FOR FCM TOKEN CHANGE ETC
               		this.checkUser();
                }
             
			    async checkUser() {
			    			var loggedIn = false ;

			                        if (loggedIn) {
			                            this.props.navigation.replace("Home")
			                        }else{ 
			                            this.props.navigation.replace("Login")
			                        }
			         
				}
}
