import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    round: {
        backgroundColor: '#fff',
        width: 82,
        height: 82,
    },
    image: {
        width: 36,
        height: 31,
        resizeMode: 'stretch'
    }
});

const Icon = ({style, url}) =>
    <View style={[styles.round, style]}>
        <Image
          style={styles.image}
          source={require(url)}
        />
    </View>;

Icon.propTypes = {
    style: PropTypes.any,
    url: PropTypes.string
}

export default Icon;