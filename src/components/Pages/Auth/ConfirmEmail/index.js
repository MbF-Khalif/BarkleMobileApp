import React from 'react';
import { View, StyleSheet, Text,Image,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { config } from "../../../../theme/config";

const styles = StyleSheet.create({
  link:{
    color: config.white,
    fontFamily:config.fontPrimary,
    lineHeight: Platform.OS === 'ios' ? 0 : 38 ,
    fontSize:16,
    // position: 'absolute',
    bottom: Platform.OS === 'ios' ? 0 : -10 ,
    zIndex: 9,
  },
 borders:{
     zIndex: 999,
    borderBottomWidth:1,
    borderBottomColor:config.white,
    marginRight: 'auto',
  },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#F45B56",
        height: '100%',
        width:'100%',
        position:'absolute',
        top:0,
        bottom: 0,
        left:0,
        right:0,
        zIndex:999
    },
    content: {
        fontSize: 21,
        lineHeight:25,
        color:config.white,
        textAlign:'center',
        width: '45%',
        paddingBottom: 80,
        fontFamily:config.fontPrimary, 
    },
    updateData:{
      fontSize: 16,
      fontFamily:config.fontSecondory, 
      lineHeight:19,
      color:config.white,
      textAlign:'center',
      width: 208
    },
    imgBlk: {
      backgroundColor:'#E04E49',
      height: 163,
      width:163,
      borderRadius: 100,
      marginBottom: 70,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
});

class Updating extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      updatingOne:true,
      updatingTwo: true,
      updatingThree: false
    };
  }
    componentDidMount(){
      
    }
    render() {
        const {updatingOne,updatingTwo,updatingThree} = this.state;
        return (
            <View style={styles.container} >
              <Text style={styles.content}>Hold on to your biscuits, check your email account.</Text>
                <View style={styles.imgBlk}>  
                  <Image style={{width: 223, height: 114,paddingTop:50}} source={require('../../../../assets/images/updating.png')}/>
                </View>
                <Text style={styles.updateData}>If you didn’t receive an email from me, then please check your SPAM folder. If you still haven’t received an email, then &nbsp;
                    <TouchableOpacity style={styles.borders} onPress={this.onForgot} ><Text style={styles.link}>click here</Text>
                  </TouchableOpacity> &nbsp;to resend. .</Text>
            </View>
        );
    }
}

export default Updating;