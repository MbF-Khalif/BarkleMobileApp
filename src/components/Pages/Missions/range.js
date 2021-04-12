import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Range from "../../Common/Range";
import { styles } from './style';
 
class App extends Component {
	render() {
		const { title, width, finished, pending } = this.props;
		return (
			<View style={{paddingBottom: 40}}>
		    	<Text style={styles.sectionTitle}>{title}</Text>
				<Range width={`${width}%`} />
				<View style={{justifyContent: 'space-between', flexDirection: 'row', paddingTop: 15}}>
					<Text style={styles.sectionText}>{finished}</Text>
					<Text style={styles.sectionText}>{pending}</Text>
				</View>
			</View>
		);
	}
}

export default App;
