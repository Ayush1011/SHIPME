import React, { Component } from 'react';
import {
  Alert,
  ScrollView,
  FlatList,
  StyleSheet,
  Button,
  TextInput,
  View,
  Image,
  
  Text,ActivityIndicator
} from "react-native";
import axios from 'axios';

export default class print extends Component {
  state = {
    isLoading: true,
    dataSource: null,
    title: 'The title of the movie',
    movieList:[],
    description:'The description of the movie'
  }
  constructor(props) {
    super(props);
    
  }


componentDidMount()
{


      axios.get(`https://facebook.github.io/react-native/movies.json`)
        .then((response) => {
          // Alert.alert(res);
          this.setState({
            title: JSON.stringify(response.data.title),
            description:JSON.stringify(response.data.description),
            movieList:response.data.movies
          });
        }).catch((error) => {
          console.error(error);
        });
      }





_onalert()
{
  Alert.alert('boom');
}
    

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

          <Text style={{fontSize:25,color:'green', flex:1, flexDirection:'row',justifyContent:'center'}}>KEEP IT UP!!</Text>

          <Text style={styles.heading}>{this.state.title}</Text>
          <Image style={{flex:0.3, justifyContent:'center',alignItems:'center',alignSelf:'center'}} source={require('./src/assets/Images/happy.jpg')} style={{ flex: 0.3, height: 200, width: 210 }} />

          <Text>{this.state.description}</Text>
          <View style={styles.list}>
          {
            this.state.movieList.length!=0 && this.state.movieList.map((item)=>(
              <View style={{flex:1,flexDirection:'row'}}>
                 <Text  style={{flex:0.2}}>{item.id}</Text>
                 <Text  style={{flex:0.5}}>{item.title}</Text>
                 <Text  style={{flex:0.3}}>{item.releaseYear}</Text> 
              </View>
               
            ))
          } 
          </View>

      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
   flex:1,
  },
  heading:{
    fontSize:20,  
    color:'red',
  },
  description:{
   
    fontSize:10,
  },
  list:{
   flex:0.6
  }
})