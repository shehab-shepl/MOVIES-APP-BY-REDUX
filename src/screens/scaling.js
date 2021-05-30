import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');
export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
//for horizontal scale
export const scale = size => width / guidelineBaseWidth * size;
//for vertical scale
export const verticalScale = size => (height / guidelineBaseHeight) * size;
const defaultFactor = (width > guidelineBaseWidth)?.5:1.25
//for fontsiza
export const moderateScale = (size, factor = defaultFactor) => size + ( scale(size) - size ) * factor;





// width:scale(124)

//height:verticalScale(200)

// fontSize:moderateScale(16)