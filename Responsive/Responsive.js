import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 411.428;
const guidelineBaseHeight = 771.71;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
export { horizontalScale , verticalScale, moderateScale };






































// style={{
//     backgroundColor:"#00f",
//     // height:Platform.OS==="android"?20:200,
//     width:horizontalScale(170),
//     height:verticalScale(100),
//     marginTop:verticalScale(10),
//     // width:width*0.9,
//     // height:height/15,
//     alignSelf:"center"
// }}


