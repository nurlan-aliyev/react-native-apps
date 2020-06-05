import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

 const TimeSetterComponent = (props) => {
    return(
        <View style={{marginHorizontal: 15, paddingTop: 25, paddingBottom: 25}}>
          <Text style={props.styles.biggerText}>{props.label}</Text>
          <Text style={props.styles.biggerText}>{props.timeCount}</Text>
            <View style={props.styles.oprBtnsView}>
                <TouchableOpacity
                 style={props.styles.oprBtns}
                 onPress={props.funcInc}
                 activeOpacity= {0.7}
                 > 
                <Text style={props.styles.oprBtnsText}><Icon name="plus" size={25} color="#FFF" /></Text>  
                </TouchableOpacity> 
                <TouchableOpacity 
                 style={props.styles.oprBtns}
                 onPress={props.funcDec} 
                 activeOpacity= {0.7}
                 >
                 <Text style={props.styles.oprBtnsText}><Icon name="minus" size={25} color="#FFF" /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
  export default TimeSetterComponent