import React from 'react'
import {
    View, Image, Text, Dimensions, I18nManager
} from 'react-native'
import Spinner from './spinner';

const { height } = Dimensions.get('window')

// @ts-ignore
export default EmptyPage = (props) => {
    const { image, error, loading, text, onReload, empty, headText, center } = props
    return(
       
        <View style={ styles.container } >
            {
                loading?
              
                <Spinner  size='small' fullScreen/>:
                
               
                <View style={ styles.container } >
                    {
                        image &&
                       
                        <Image source={ image } style={ styles.imageStyle } />
                    }
                    {
                        headText && 
                        
                        <Text style={ styles.headText } >{ headText }</Text>
                    }
                    {
                        text &&
                    
                        <Text style={ [styles.textStyle, {marginBottom: center? 200:0}] } >{ text }</Text>
                    }
                </View>
            }
        </View>
    )
}

const styles = {
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    imageStyle: {
        width: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    textStyle: {
        color: '#8F8F8F',
        fontSize:15,
        textAlign: 'center',
        textAlignVertical:'center',
               // width: 150
        
    
        
       
    },
    headText: {
        color: '#3A2E2E',
        fontSize: 16,
        textAlign: 'center',
        
               width: 150,
        marginBottom: 10,

    }
}