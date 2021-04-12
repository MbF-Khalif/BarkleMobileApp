import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import PropTypes from 'prop-types';
import {config} from '../../../theme/config';

const styles = StyleSheet.create({
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
      fontSize: 15,
      fontFamily:config.fontPrimary, 
      lineHeight:18,
      color:config.white,
      textAlign:'center',
      width: '45%'
    },
    imgBlk: {
      backgroundColor:'#E04E49',
      height: 163,
      width:163,
      borderRadius: 100,
      marginBottom: 25,
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
      updatingTwo: false,
      updatingThree: false
    };
  }
    componentDidMount(){
      setTimeout(() =>{
        this.setState({
          updatingOne:false,
          updatingTwo: true,
          updatingThree: false
        }) 
      },1000);

      setTimeout(() =>{
        this.setState({
          updatingOne:false,
          updatingTwo: false,
          updatingThree: true
        })
      },1500);
    }
    render() {
        const {updatingOne,updatingTwo,updatingThree} = this.state;
        return (
            <View style={styles.container} >
              <Text style={styles.content}>Hold on to your biscuits, I’m setting up your account.</Text>
                <View style={styles.imgBlk}>  
                  <Image style={{width: 223, height: 114,paddingTop:50}} source={require('../../../assets/images/updating.png')}/>
                </View>
                {updatingOne && <Text style={styles.updateData}>Pulling in your data…</Text>}
                {updatingTwo && <Text style={styles.updateData}>Setting up your account…</Text>}
                {updatingThree && <Text style={styles.updateData}>Creating your Dashboard…</Text>}
            </View>
        );
    }
}

export default Updating;