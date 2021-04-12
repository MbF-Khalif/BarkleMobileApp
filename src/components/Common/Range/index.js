import React, { Component } from 'react'
import {  StyleSheet, Animated, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import {config} from '../../../theme/config';

var { width } = Dimensions.get('window');
var available_width = width - 40 - 12;

const styles = StyleSheet.create({
    bgLine: {
        backgroundColor: '#EAE4E4', 
        height: 1, 
    },
    range: {
        backgroundColor: config.bgGreen,
        borderRadius: 3,
        position: 'absolute', 
        top: -1.5,
        height: 4, 
    }
});

class Range extends Component {
    constructor(props) {
        super(props);
        this.progress = new Animated.Value(0);
    }
    
    componentDidMount() {
        this.progress.setValue(0);
        Animated.timing(this.progress, {
          duration: 3000,
          toValue: 100,
        }).start();
    }

    getProgressStyles() {
        const { width } = this.props;
        const intWidth = parseInt(width);
        var animated_width = this.progress.interpolate({
            inputRange: [0, 100],
            outputRange: [0, intWidth]
        });
        
        return {
            width: animated_width,
            backgroundColor: config.bgGreen,
            borderRadius: 3,
            position: 'absolute', 
            top: -1.5,
            height: 4, 
        }
    }

    render() {
        return (
            <View style={{ height: 4}}>
                <View style={styles.bgLine}>
                    <Animated.View style={[this.getProgressStyles.call(this)]}></Animated.View>
                </View>
            </View>
        )
    }
}

Range.propTypes = {
    width: PropTypes.any,
}

export default Range;