import React, { Component, useRef, useEffect } from 'react';
import { View, Text, StyleSheet,Image,ScrollView,TouchableOpacity, TouchableWithoutFeedback, Dimensions, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Menu from './menu';
import H4 from "../Typos/h4";

import {config} from '../../../theme/config';
import { styles } from './style';

const windowHeight = Dimensions.get('window').height;

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}
const styl = StyleSheet.create({
    menuHeight:{
      height: windowHeight,
      marginBottom: 200
    }
});

const MenuItems = ({ menuClose,onPress }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 250,
        useNativeDriver: true
      }
    ).start();
    }, [])
    
    return (

        <Animated.View
          style={[styles.container,styl.menuHeight,{
            opacity: fadeAnim,
          }]}
        >
        <View style={styles.menuBlk}>
          <View style={styles.drawer}>
            <View style={styles.head}>
              <View style={[styles.titleBlk,styles.blockEvent]}>
                <H4 style={{ paddingRight: 5,color:'#FFC1C1',fontSize:23,
                lineHeight: 23,paddingBottom: 0,marginBottom: 0}} >barkle</H4>
                <Image style={{width: 41, height: 27, marginBottom:Platform.OS === 'ios' ? 10 : 10}} source={require('../../../assets/images/menuLogo.png')} />
              </View>
              <TouchableOpacity onPress={onPress}>
                <Image style={{width: 15, height: 15}} source={require('../../../assets/images/closem.png')} />
              </TouchableOpacity>
            </View>
            <ScrollView scrollEnabled={true}>
            <View style={styles.bodyMenu}>
              <Menu menuClick={menuClose} />
            </View>
            </ScrollView>
          </View>
        </View>
        {/*<TouchableWithoutFeedback onPress={menuClose}>
            <View style={styles.outSide}></View>
        </TouchableWithoutFeedback>*/}
        </Animated.View>
    );
}

export default MenuItems;
