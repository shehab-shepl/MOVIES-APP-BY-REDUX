import {
    View,
    Button,
    Text,
    TextInput,
    ScrollView,
    StyleSheet,
    Switch,
    TouchableOpacity,
    KeyboardAvoidingView,
  } from 'react-native';
  import React, { Component } from 'react';
  import axios from 'axios';
  
  
  export default class searchScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        Movies : []
       
      };
    }
  
    // make the GET request to fetch data from the URL then using promise function to handle response.
    componentDidMount() {
      axios.get(`http://www.omdbapi.com/?apikey=af8d172c&s=cast`)
        .then(result => {
          const Movies = result.data.Search;
          this.setState({ Movies });
        })
    }
    
    

    render() {
      const {Movies} = this.state;
      return (
         <Text>
           { 
           Movies.map(movie => <View><Text>{movie.Title}</Text></View>)
           }
         </Text>
       )
     }
     
  
    // render() {
    //   return (
    //    <View style={styles.container}>
    //        <Text style={styles.text}>
    //            this is search movies screen
    //        </Text>
    //        <Text style={styles.text} onPress={()=>{

    //            this.props.navigation.navigate('Movie')
    //        }}>press here</Text>
    //    </View>
    //   );
    // }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:16,
        color:'red'
    }
  });
  