import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import {config} from '../../../theme/config';

const Item = ({ name, info, lead }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.info}>{info}</Text>
      <Text style={styles.lead}>{lead}</Text>
    </View>
  </View>
);

const App = ({data}) => {
  const renderItem = ({ item }) => (
    <Item name={item.name} info={item.info} lead={item.lead} />
  );

  return (
    <View style={{borderColor: '#D3D3D3', borderTopWidth: 0.5}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 28,
    paddingLeft: 5,
    paddingRight: 10,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontFamily:config.fontPrimary,
    lineHeight: 18,
    color: '#000'
  },
  info: {
    fontSize: 12,
    fontFamily:config.fontSecondory,
    lineHeight: 14,
    color: '#000'
  },
  lead: {
    fontSize: 12,
    fontFamily:config.fontPrimary,
    lineHeight: 14,
    color: '#000',
    paddingLeft: 30
  }
});

export default App;