import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import settingScreen from '../screens/settingScreen';
import searchScreen from '../screens/searchScreen';
import movieScreen from '../screens/movieScreen';


const tabs = createBottomTabNavigator();


export default TabsController = () => {
    return (
        <NavigationContainer  >
            <tabs.Navigator tabBarOptions={{
                labelStyle: {
                    fontSize: 25,
                    // margin: 0,
                    padding: 0,
                    color: 'red',
                    // justifyContent :'center',
                    // alignContent : 'center'
                },
                style: {
                    backgroundColor: '#F3E5AB',
                    color: 'red',
                    
                },
            }}>
                <tabs.Screen style={styles.barItem} name="Movies" component={movieStack} />
                <tabs.Screen name="Setting" component={settingScreen} />
            </tabs.Navigator>
        </NavigationContainer>
    )
}


const Movie = createStackNavigator();

movieStack = () => {
    return (
        <Movie.Navigator>
            <Movie.Screen name="search" component={searchScreen} options={{ headerTitle: 'Search' }} />
            <Movie.Screen name="Movie" component={movieScreen} options={{ headerTitle: '' }} />
        </Movie.Navigator>
    );
}

const styles = StyleSheet.create({
    barItem: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: 'red'
    },
    tabs: {
        backgroundColor: 'grey',
        color: 'grey'
    }

});