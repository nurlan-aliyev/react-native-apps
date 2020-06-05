import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

 const TimerComponent = (props) => {
    return(
        <View style={props.styles.timerCompContainer}>
            <Text style={props.styles.timerMainText}>{props.label}</Text>
            <Text style={props.styles.timerMainText}>{props.timerCount}</Text>
                <View style={props.styles.oprBtnsView}>
                    <TouchableOpacity
                    style={props.styles.timerCompBtns}
                    onPress={props.funcplayPause}
                    activeOpacity= {0.7}
                    > 
                    <Text style={props.styles.timerCompText}><Icon name={props.isPlaying ? "pause"  : "play"}  size={25} color="#FFF" /></Text>  
                    </TouchableOpacity> 
                    <TouchableOpacity 
                    style={props.styles.timerCompBtns}
                    onPress={props.funcReset} 
                    activeOpacity= {0.7}
                    >
                    <Text style={props.styles.timerCompText}><Icon name="refresh"  size={25} color="#FFF" /></Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
  }
  export default TimerComponent