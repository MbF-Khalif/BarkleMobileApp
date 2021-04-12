import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { isEmpty } from "lodash";

class Select extends Component {
	state = {
		value: null,
	};

	toSelect(type) {
		this.setState({
			value: type,
		});
		this.props.selectAdd(type);
	}

	render() {
		const { PROP } = this.props;
		const { value } = this.state;
		return (
			<View>
				{!isEmpty(PROP) && PROP.map(res => {
					return (
						<TouchableOpacity
							style={styles.container}
							onPress={this.toSelect.bind(this, res.key)}>
								<View style={styles.box}>{res.key === value &&<Text>*</Text>}</View>
                            	<Text style={styles.text}>{res.text}</Text>
						</TouchableOpacity>
					);
				})
			}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
		backgroundColor: '#FCFCFC',
	},
	box: {
		width: 20,
		height: 20,
		borderRadius: 5, 
		borderColor: '#44C0C6',
		borderWidth: 1,
		alignItems: 'center',
	},
    text: {
        marginRight: 5,
        fontSize: 12,
        color: '#707070',
        lineHeight: 18,
        letterSpacing: 0.12,
        marginLeft: 10
    },
});

export default Select;