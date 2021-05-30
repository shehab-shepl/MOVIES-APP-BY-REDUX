import {
  View,
  Button,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { getMovieInfo } from '../Redux/actions/movieDetailsAction';

import React, { Component } from 'react';

let widthChart = ''
let colorChart = ''

const Item = ({ title, value }) => (

  // {title =='Internet Movie Database'? (parseInt(value))*10 : parseInt(value)}
  widthChart = `${title == 'Internet Movie Database' ? (parseInt(value)) * 10 : parseInt(value)}%`,
  colorChart = `${parseFloat(widthChart) <= 40 ? 'red' : parseFloat(widthChart) <= 70 ? 'yellow':'green' }`,
  <View style={styles.item}>
    <Text style={styles.rates}>{title} : ({value})</Text>
    <View style={[styles.chart,
    {
      width: widthChart,
      backgroundColor:colorChart
    }]}>
      <Text style={styles.rates}> </Text>
    </View>
  </View>
);

class movieScreen extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    // this.setState({ basicInfo: this.props.route.params.item },
    //   () => {
    //     // console.log(this.props.route.params.item),
    //     this.getMovieInfo()
    //   })

    // console.log(this.props.route.params.item)
    //console.log(this.props.route.params.shehab)
    this.props.getMovieInfo(this.props.route.params.item)
  }

  // getMovieInfo = async () => {
  //   try {
  //     const response = await axios.get(`http://www.omdbapi.com/?apikey=af8d172c&i=${this.state.basicInfo.imdbID}`)
  //     this.setState({ allInfo: response.data },
  //       () => {
  //         console.log(this.state.allInfo.Ratings)
  //       })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  renderItem = ({ item }) => {
    return (
      <Item title={item.Source} value={item.Value} />
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: this.props.basicInfo.Poster }}
          style={styles.img}
        />
        {/* <Text style={this.props.route.params.shehab == 20 ?{color:'red'}:{color:'blue'}}>{this.state.basicInfo.Title}</Text> */}
        <View style={styles.row}>
          <Text style={[styles.title, { marginLeft: 10 }]}>{this.props.basicInfo.Title}</Text>
          <Text style={styles.year}>({this.props.basicInfo.Year})</Text>

        </View>
        <Text style={[styles.year, { marginHorizontal: 10  }]}>{this.props.allInfo.Plot}</Text>

        <FlatList
          data={this.props.allInfo.Ratings}
          renderItem={this.renderItem}
          style={{ marginBottom: 30 }}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
    backgroundColor: "black"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: "white"

  },
  text: {
    fontSize: 16,

    color: 'red'
  },
  img: {
    marginTop: 10,
    marginHorizontal: 10,
    height: 450,
    borderRadius: 20,
  },
  row: {
    // marginHorizontal:1,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  year: {
    // marginLeft: 10,
    color: "white",
    fontSize: 20,
    marginTop: 20,

  },
  rates: {
    color: "white",
    marginLeft: 10,
    color: "white",
    fontSize: 20,
    marginTop: 20,
  },
  chart: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: "red",
    height: 10,



  }
});


const mapStateToProps = (state) => ({

  basicInfo: state.MovieDetailsReducer.basicInfo,
  allInfo: state.MovieDetailsReducer.allInfo,

})

export default connect(mapStateToProps, {
  getMovieInfo,
})(movieScreen)