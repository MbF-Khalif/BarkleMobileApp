import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {styles} from './style';

const H4 = ({ children, uppercase, style }) =>
    <Text style={[styles.titleFour, style]}>
        {uppercase?children.toUpperCase():children}
    </Text>;

H4.propTypes = {
    children: PropTypes.node.isRequired,
    uppercase: PropTypes.bool,
    style: PropTypes.any,
};

export default H4;