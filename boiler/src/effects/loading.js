import React , { Component } from 'react';
import { View,ActivityIndicator } from 'react-native';
import Fade from "./fade"
class Loading extends Component {
  constructor(props){
    super(props);
  }
  render(){
    // THIS WILL BE A FULL SCREEN VIEW WITH ALOADING INDICATOR 
    // CAN USE CUSTOM LOADER RIGHT HERE INSTEAD OF ActivityIndicator 
    // PREFERD LOTTY ANIMATIONS
    
            return (
              <View style = {[{
                flex:1,height:'100%',width:'100%'},this.props.style]} >
                {this.props.children}
                <Fade visible = {this.props.loading} animate = {false} style = {[{
                    left: 0,top: 0,bottom: 0,right: 0,margin: 0 ,flex: 1,position: 'absolute',height:'100%',width:'100%',}]}>
                  <View style = {[{
                    height:'100%',width:'100%',
                    opacity: 0.5,backgroundColor: '#000000',
                    justifyContent: 'center',alignItems:'center'   ,
                  }]}>
                <ActivityIndicator size="large" color="#0000ff" />
                 </View>
                 </Fade>
              </View>
                 )
      
  }
}
export default (Loading)