import React, { Component } from 'react';
import {
  Alert,
  ScrollView,
  FlatList,
  StyleSheet,
  Button,
  TextInput,
  View,
  
  Text,ActivityIndicator
} from "react-native";
const axios = require('axios')

export default class print extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading:true,
      dataSource:null,
      data:''
     }
  }


componentDidMount()
{
    axios.get("https://facebook.github.io/react-native/movies.json")
    .then(function(response){
      let res =JSON.stringify(response);
      Alert.alert(res);
     /* this.setState({data:res})*/
    })
/* .then((getResponse)=>{
       */
      .catch((error) => {
        console.error(error);
      });

}



_onalert()
{
  Alert.alert('boom');
}
    

  render() {
    return (
      <View>
          <Text>{this.state.data}</Text>
      </View>
    );
  }

  }



 /* render(){

    return(
  { if(this.state.isLoading)
  {
      <ActivityIndicator />
}else{}
 /* let User = this.state.dataSource.map((val, key) => {


    <View key={key} >{val.title}</View>
  });
  return (<View>{User}</View>);
  }*/

  


 



