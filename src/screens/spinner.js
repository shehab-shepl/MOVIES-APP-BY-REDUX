import React from 'react';
import { View, ActivityIndicator } from 'react-native';


// @ts-ignore
export default Spinner = ({ size, style, fullScreen }) => {
  return (
    <View style={[styles.spinnerStyle, style, fullScreen && { flex: 1 }]}>
      <ActivityIndicator color={'#009FE3'} size={size || 'large'} />
    </View>
  )
}

const styles = {
  spinnerStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  overlayStyle:{
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}