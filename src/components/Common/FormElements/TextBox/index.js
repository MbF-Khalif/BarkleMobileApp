import React, { Component } from 'react';
import { View, TextInput, Text, Animated, Image, TouchableOpacity , Platform } from 'react-native';
import PropTypes from 'prop-types';
import { isEmpty } from "lodash";
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
    const { label, value, onChange, maxLength, pickerImage, name, error, secureTextEntry, keyboardType, returnType,lastchild,style, borderColor,onPress, editable, visibleIcon,fullWidth, onVisibleChange,close,} = this.props;
    const { fadeAnim, labelFontSize } = this.state; 
    return (
      <View style={[styles.input, lastchild && styles.lastchild]}>
        <View>
          {label !== undefined && <Animated.Text 
            style={[styles.label]}>{label}
          </Animated.Text>}
        </View>
        <View style={{position:'relative',}}>
       {close && <TouchableOpacity onPress={onPress} style={{position:'absolute',top: 7,left:-18,zIndex:9999,marginRight: 20}}><Image style={{width: 34, height: 34,}} source={require('../../../../assets/images/close.png')}/></TouchableOpacity>}
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
            <View style={[styles.errorFullWidth,fullWidth && styles.fullWidth]}>
              <Image style={{width: 27, height: 27}} source={require('../../../../assets/images/error.png')}/>
              <Text style={{color:config.errorColor,paddingLeft:10,width: '90%', fontSize:16,fontFamily: config.fontSecondory,paddingRight: 5}}>{error}</Text>
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
  onClose:PropTypes.func,
  error:PropTypes.string,
  pickerImage:PropTypes.any,
  name:PropTypes.string,
  secureTextEntry:PropTypes.bool,
  keyboardType:PropTypes.string,
  returnType: PropTypes.string,
  fullWidth: PropTypes.string,
  lastchild:PropTypes.bool,
  style: PropTypes.any,
  borderColor: PropTypes.any,
  onPress:PropTypes.any,
  close:PropTypes.string,
  onFocus:PropTypes.func,
  onChangeText:PropTypes.func,
  editable: PropTypes.bool,
  visibleIcon: PropTypes.bool,
  onVisibleChange: PropTypes.func
};

export default FloatingLabelInput;