import React , { Component } from 'react';
import { View,Text,SectionList,Image } from 'react-native';
import {styles} from "./../../style"


class UserList extends Component {
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
    console.log(this.props.data)
    return (
      <View style = {[styles.transparent, {width:"100%"}]}>
      
           <SectionList style = {{width:"100%"}}
                renderItem={({item, index, section}) => (<View style ={[styles.horizontal,{justifyContent:"flex-start",alignItems:'flex-start'}]}>
                          <Image
                    style={[styles.circle25]}
                    source={{uri: item.picture.thumbnail}}
                  />
                  <Text style ={{padding :10}} key={index}>{(item.name.title + " " + item.name.first + " " + item.name.last).toUpperCase()}</Text>
                  </View>)}
                renderSectionHeader={({section: {title}}) => (
                  <Text style={{fontWeight: 'bold'}}>{title}</Text>
                )}
                sections={[
                  {title: 'FRIENDS', data: this.props.data},
                ]}
                keyExtractor={(item, index) => item + index}
                onEndReached={() => { this.props.onEnd() }}
         
              />
      
    </View> )
  }
}
export default (UserList);