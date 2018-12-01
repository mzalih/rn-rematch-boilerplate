import React, {Component} from 'react';
import { View ,ActivityIndicator,Text,Image} from 'react-native'
import { Container, Item, Content, Button  } from 'native-base';
import {styles} from "./../../style"
import { connect } from "react-redux";
import { compose } from "recompose";

const mapDispatchToProps = ({ homeModal }) => {
  return {
    ...homeModal
  };
};

const mapStateToProps = ({ homeModal }) => {
  return {
    ...homeModal
  };
};

class Page extends React.Component {

	async componentDidMount() {
        this.props.fetchUser();
    }
   
    componentWillReceiveProps(nextProps){
              if (nextProps.loginStatus == false) {
                  this.props.navigation.replace('Login')
              }
          }

   render() {
  //console.log(this.props);
    
    if(this.props.loading){
      return (<View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>);
    }
     if(this.props.userData){
      return (<View style={[styles.container]}>
        <Image
            style={[styles.circle100]}
            source={{uri: this.props.userData.results[0].picture.thumbnail}}
          />
              <Text style={[styles.headline]}>WELCOME</Text>
       <Text style={[styles.title]} >{ (this.props.userData.results[0].name.first + " " + this.props.userData.results[0].name.last).toUpperCase()}</Text>
      <Button style= {{ margin: 10 }} block primary onPress= { ()=> { this.props.logout() } }>
            <Text>Logout</Text>
      </Button>
          

      </View>);
    }
    
    
  	return (
    <View style={[styles.container, styles.horizontal]} >
    		<Text>ERROR</Text>
    </View>); 
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Page);
