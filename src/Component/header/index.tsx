// import {View, Text, StyleSheet, Image} from 'react-native';
// import React from 'react';
// import Appimages from '../../Theme/Appimages';
// import Utils from '../../common/utils';

// interface HeaderProps {
//   name?: string;
//   title?: string;
//   image: any;
// }

// const Myheader = (props: HeaderProps) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.titlecontainer}>
//         <View style={styles.center}>
//           <Text style={styles.text}>Hello{props.name} 👋</Text>
//           <Text style={styles.title}>{props.title}</Text>
//         </View>
//         <View style={{}}>
//           <Image source={Appimages.headerimage} style={styles.img2} />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Myheader;

// const styles = StyleSheet.create({
//   container: {
//     height: Utils.heightScaleSize(141),
//     justifyContent:'center',
//     // backgroundColor:'red'
//   },
//   titlecontainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     flex: 1,
//   },
//   img2: {
//     height: Utils.heightScaleSize(200),
//     width: Utils.widthScaleSize(205),
//     resizeMode:'stretch'
//   },
//   center: {
//     width:'55%'
//   },
//   text: {
//     color: 'white',
//     fontSize: Utils.heightScaleSize(25),
//     fontWeight: 'bold',
//     marginHorizontal: 25,
//     marginTop:50
//   },
//   title:{
//     color:'white',
//     fontSize:Utils.heightScaleSize(12),
//     marginHorizontal:25
//   }
// });
