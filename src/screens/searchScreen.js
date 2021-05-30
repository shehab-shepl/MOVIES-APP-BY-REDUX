import {
  View,
  Button,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView, FlatList, StatusBar,
  Image,

} from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';
import { getMovies, refreshMovies, paginateMovies,changePropMovies } from '../Redux/actions/moviesAction';
import EmptyPage from './emptyPage';
import {Spinner} from './spinner';

class searchScreen extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }


  onChangeText = (value) => {
    this.props.changePropMovies('searchName',value)
    console.log(this.props.searchName)
    if(value.length >= 3 || value.length === 0){
      this.props.getMovies() 
      console.log(this.props.Movies)
    }
  }






  renderItem = ({ item, index }) => {
    return (
      <Item item={item} onClick={(value) => {
        this.props.navigation.navigate('Movie', { item: value.item, shehab: value })
      }} />
    )
  }

  renderFooter = () => {
    return this.props.pagePaginate ? <Spinner size={'small'} /> : <View style={{ width: 0, height: 0 }} />
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.searchText, { fontSize: 23, }]}>Searccch</Text>
        <TextInput
          style={styles.input}
          placeholder={'search about movie...'}
          onChangeText={(value) => this.onChangeText(value)}
          value={this.props.searchName}
        />
        <>
          <FlatList
            data={this.props.Movies}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 7 }}
            contentContainerStyle={!this.props.Movies.length && { flex: 1, justifyContent: 'center', alignItems: 'center' }}
            refreshing={this.props.PageRefresh}
            onRefresh={!this.props.PageLoading && this.props.refreshMovies}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            onEndReached={!this.props.PagePaginate && this.props.MoreData && this.props.paginateMovies}
            onEndReachedThreshold={0}
            ListFooterComponent={this.renderFooter}
            ListEmptyComponent={() => <EmptyPage loading={this.props.PageLoading} text='No Movies' />}
          />
        </>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  searchText: {
    fontSize: 22,
    color: 'red'
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    backgroundColor: 'grey'
  },
  list: {
    marginTop: 20,
    backgroundColor: 'black'
  }
});


const mapStateToProps = (state) => ({

  Movies: state.MoviesReducer.Movies,
  PageLoading: state.MoviesReducer.PageLoading,
  PageError: state.MoviesReducer.PageError,
  PageRefresh: state.MoviesReducer.PageRefresh,
  PagePaginate: state.MoviesReducer.PagePaginate,
  MoreData: state.MoviesReducer.MoreData,
  PageIndex: state.MoviesReducer.PageIndex,
  searchName: state.MoviesReducer.searchName,
})

export default connect(mapStateToProps, {
  refreshMovies,
  getMovies,
  paginateMovies,
  changePropMovies
})(searchScreen)