import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import {config} from '../../../../theme/config';

const styles = StyleSheet.create({
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:4,
        marginBottom:20,
    },
    radioOuter: {
        borderColor: config.white, 
        backgroundColor: config.white,
        borderWidth: 2,
        borderRadius: 4,
        marginRight:13,
        width: 35,
        height: 35,
    },
    radioInner: {
    position: 'absolute',
    top: 14,
    left: 11,
        borderBottomWidth:1,
        borderBottomColor:'transparent',
        borderRightWidth:1,
        borderRightColor:'transparent',
        
        backgroundColor: 'red',
        margin: 3,
        width: 35,
        borderRadius: 50,
        height: 35,
    },
    radioInnerInactive: {
        backgroundColor: 'red',
    },
    labelColor: {
        color: config.white,
        fontSize: 15,
        fontFamily:config.fontSecondory,
        lineHeight: 18,
    },
})

class CheckBox extends Component {
    constructor() {
        super();
        this.state = { 
            checked: false,
        };
    }
    componentWillReceiveProps(nextProps) {
      if(nextProps.checkedIndex !== this.props.checkedIndex) {
        this.setState({
            checked:nextProps.checkedIndex
        });
      } 
    }
    componentWillMount() {
      this.setState({
        checked:this.props.checkedIndex
      });
      if(this.props.checkedOpt !== undefined) {
        this.props.checkedOpt(this.props.checkedIndex);
      }
    }
    checkHandler = (key) => {
      this.setState({
        checked:key
      });
      if(this.props.checkedOpt !== undefined) {
        this.props.checkedOpt(key);
      }
    }
    render () {
        const { dataArray,label,checked } = this.props;
        return (
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
            
              <View >
                  {this.state.checked === 'true'?
                  <TouchableOpacity style={styles.radioRow}>
                      <View style={styles.radioOuter}>
                          <View style={styles.radioInner} />
                      </View>
                      <Text>{data}</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={styles.radioRow} onPress={this.checkHandler}>
                      <View style={styles.radioOuter}>
                          <View style={styles.radioInnerInactive} />
                      </View>
                      <Text style={styles.labelColor}>{label}</Text>
                  </TouchableOpacity>}
              </View>
            
          </View>
        )
    }
}

CheckBox.propTypes = {
    dataArray: PropTypes.array,
    checkedIndex: PropTypes.any,
    checkedOpt: PropTypes.func
}

export default CheckBox;
