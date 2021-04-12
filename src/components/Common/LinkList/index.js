import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

import { styles } from './style';


class LinkList extends Component {

  render() {
  	const {style,mils,startDate,value,startday,endDate,endday,challenge,mail,title,date,label,time,onPress,imgs,img,timeOnly,border} = this.props;	
    return (
    	<TouchableOpacity onPress={onPress} style={[styles.block,styles.listBorder,border && styles.borderBottom,style]}>
    		{img && <Image style={{width: 50, height: 50,marginRight: 15}} source={imgs}/>}
    		<View>
	    		<Text style={[styles.eventTitle,border && styles.titleOnly]}>{title}</Text>
	    		<View style={{display: 'flex',flexDirection:'row'}}>
                    {challenge && <View>
                    <Text style={styles.eventDate}>{mail} TEAMS / RIDERS {value}</Text>
                    <Text style={styles.eventDate}>{startday} TO {endday}</Text>
                    <Text style={styles.eventDate}>{time} weeks</Text>
                    </View>}
                    {mils && <View>
                    <Text style={styles.eventDate}>{mail} {value}</Text>
                    <Text style={styles.eventDate}>Started on {startday}</Text>
                    <Text style={styles.eventDate}>Ends on {endday}</Text>
                    </View>}
	    			{timeOnly && <Text style={styles.eventDate}>{time} , </Text>}
                    <Text style={styles.eventDate}>{date}</Text>
		    	</View>
	    	</View>
	    	<Image style={{width: 5, height: 10,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
        </TouchableOpacity>
    );
  }
}


LinkList.propTypes = {
    style: PropTypes.any,
    imgs: PropTypes.any,
    timeOnly: PropTypes.any,
    mils: PropTypes.any,
    img: PropTypes.any,
    title: PropTypes.string,
    days: PropTypes.string,
    value: PropTypes.string,
    endday: PropTypes.string,
    mail: PropTypes.string,
    startday: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    onPress:PropTypes.any,
    challenge:PropTypes.any,
    border:PropTypes.any,
};


export default LinkList;