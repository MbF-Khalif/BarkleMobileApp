import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {styles} from './style';

const H5 = ({ children, uppercase, style }) =>
    <Text style={[styles.titleFive, style]}>
        {uppercase?children.toUpperCase():children}
    </Text>;

H5.propTypes = {
    children: PropTypes.node.isRequired,
    uppercase: PropTypes.bool,
    style: PropTypes.any,
};

export default H5;