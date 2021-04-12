import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import {config} from '../../../theme/config';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7c1bf',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        position:'absolute',
        top: 0,
        width: '100%',
        zIndex:999
    },
    content: {
        fontFamily:config.fontSecondory,
        fontSize: 18,
        lineHeight:22,
        fontWeight: '400',
        color: '#f40e06',
        textAlign:'center'
    },
});

class NotifyPopup extends React.Component {
    render() {
        const { content, cancel, customStyle } = this.props;
        return (
            <View style={[styles.container, cancel && { backgroundColor: 'white' }, customStyle]}>
                <Text style={styles.content}>{content}</Text>
            </View>
        );
    }
}

NotifyPopup.propTypes = {
    content: PropTypes.oneOfType([PropTypes.object,PropTypes.string]),
    cancel: PropTypes.any,
    customStyle: PropTypes.any
} 

export default NotifyPopup;