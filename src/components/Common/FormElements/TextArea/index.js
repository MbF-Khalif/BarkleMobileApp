import React, { Component } from 'react';
import { View, TextInput, Text, Animated, Image, TouchableOpacity , Platform } from 'react-native';
import PropTypes from 'prop-types';
import {config} from '../../../../theme/config';
import { styles } from './style';


class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(6),
      labelFontSize: new Animated.Value(13)
    };
      this.handleFocus = this.handleFocus.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.value !== this.props.value) {
       if(nextProps.value !== '') {
        this._focusCall();
      }
    }
  }
  _focusCall() {
      
  }
  handleFocus(){
   
  }
  handleBlur(){
    
  }
  render() {
    const { label, value, onChange, maxLength, pickerImage, name, error, secureTextEntry, keyboardType, returnType,lastchild,style, borderColor,onPress, editable, visibleIcon, onVisibleChange } = this.props;
    const { fadeAnim, labelFontSize } = this.state; 
    return (
      <View style={[styles.input, lastchild && styles.lastchild]}>
        <View>
          {label !== undefined && <Animated.Text 
            style={[styles.label, {top:fadeAnim, fontSize:15,color:'#FDFDFD',lineHeight:18}]}>{label}
          </Animated.Text>}
        </View>
        <View style={{position:'relative',}}>
          <TextInput
            underlineColorAndroid='transparent'
            value={value} 
            style={[styles.inputText, style, {borderColor}]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyPress={this.onKeyPress}
            error={error}
            name={name}
            maxLength={maxLength}
            keyboardType ={keyboardType}
            returnKeyType={returnType}
            secureTextEntry={secureTextEntry}
            onChangeText={onChange}
            blurOnSubmit
            onPress={onPress}
            editable={editable}
          />
          
          {error && 
            <View style={{paddingTop:20,display:'flex',flexDirection:'row', backgroundColor: '#F7C1BF',maxWidth:240,paddingVertical:20,paddingHorizontal:10,alignItems:'center',lineHeight:19}}>
              <Image style={{width: 27, height: 27}} source={require('../../../../assets/images/error.png')}/>
              <Text style={{color:config.errorColor,paddingLeft:10,width: '90%', fontSize:16,fontFamily: config.fontSecondory}}>{error}</Text>
            </View>}
        </View>
      </View>
    );
  }
}

FloatingLabelInput.propTypes = {
  label: PropTypes.string,
  maxLength:PropTypes.number,
  value:PropTypes.string,
  onChange:PropTypes.func,
  error:PropTypes.string,
  pickerImage:PropTypes.any,
  name:PropTypes.string,
  secureTextEntry:PropTypes.bool,
  keyboardType:PropTypes.string,
  returnType: PropTypes.string,
  lastchild:PropTypes.bool,
  style: PropTypes.any,
  borderColor: PropTypes.any,
  onPress:PropTypes.any,
  onFocus:PropTypes.func,
  onChangeText:PropTypes.func,
  editable: PropTypes.bool,
  visibleIcon: PropTypes.bool,
  onVisibleChange: PropTypes.func
};

export default FloatingLabelInput;