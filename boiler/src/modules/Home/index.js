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

  static navigationOptions = {
        title: "PAGE NAME",
        headerStyle: styles.headerStyle,
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', },
    }


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
    var data = this.props.userData ? this.props.userData.results[0] : null;
    if(this.props.loading){
      return (<View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>);
    }
     if(data){
      return (<View style={[styles.container]}>
        <Image
            style={[styles.circle100]}
            source={{uri: data.picture.medium}}
          />
              <Text style={[styles.headline]}>WELCOME</Text>
       <Text style={[styles.title]} >{ (data.name.title + " " + data.name.first + " " + data.name.last).toUpperCase()}</Text>
      <Button style= {{ margin: 10 ,backgroundColor:"#0000000" }} block primary onPress= { ()=> { this.props.logout() } }>
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
