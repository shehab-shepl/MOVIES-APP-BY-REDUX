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
    Image
} from 'react-native';
import React, { Component } from 'react';



export default function Item({ item,onClick}) {
    return (
        <TouchableOpacity style={styles.item}
        onPress={()=>onClick({item:item,shehab:19})}
        >
            <Image
                source={{ uri: item.Poster }}
                style={styles.img}
            />
            <View>
            <Text  numberOfLines={2} style={styles.title}>{item.Title}</Text>
            <Text style={styles.year}>{item.Year} ( {item.Type} )</Text>
            </View>
        </TouchableOpacity>

    )
};






const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
        // backgroundColor:'grey',
        //elevation:1,
    },
    title: {
        fontSize:16,
        fontWeight: 'bold',
        marginLeft:20,
        //alignSelf:'center',
        maxWidth:280,
        marginTop:10,
        color:'white'
    },
    img: {
        width: 80,
        height: 100
    },
    year:{
        fontSize:15,
        marginLeft:30,
        marginTop:3,
        color:'white'
    }
});
