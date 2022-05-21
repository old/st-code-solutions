import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import PrimaryButton from './PrimaryButton';



export default function ButtonsContainer(props) {

    const buttons = [
        {
            text: "AC", 
            isLong: false,
            isOrange: false
        },
        {
            text: "-", 
            isLong: false,
            isOrange: false
        },
        {
            text: "%", 
            isLong: false,
            isOrange: false
        },
        {
            text: "/", 
            isLong: false,
            isOrange: true
        },
        {
            text: "7", 
            isLong: false,
            isOrange: false
        },
        {
            text: "8", 
            isLong: false,
            isOrange: false
        },
        {
            text: "9", 
            isLong: false,
            isOrange: false
        },
        {
            text: "*", 
            isLong: false,
            isOrange: true
        },
        {
            text: "4", 
            isLong: false,
            isOrange: false
        },
        {
            text: "5", 
            isLong: false,
            isOrange: false
        },
        {
            text: "6", 
            isLong: false,
            isOrange: false
        },

        {
            text: "-", 
            isLong: false,
            isOrange: true
        },
        {
            text: "1", 
            isLong: false,
            isOrange: false
        },
        {
            text: "2", 
            isLong: false,
            isOrange: false
        },

        {
            text: "3", 
            isLong: false,
            isOrange: false
        },
        {
            text: "+", 
            isLong: false,
            isOrange: true
        },
        {
            text: "0", 
            isLong: true,
            isOrange: false
        },
        {
            text: ".", 
            isLong: false,
            isOrange: false
        },
        {
            text: "=", 
            isLong: false,
            isOrange: false
        },

    ]

    return (
        <View style={styles.ButtonsContainerView}>
            {buttons.map(button => <PrimaryButton buttonText={button.text} isOrange={button.isOrange} isLong={button.isLong} equation={props.equation} setEquation={props.setEquation}/>)}
        </View>
    )
    
}

const styles = StyleSheet.create({
    ButtonsContainerView: {
        flex: 2,
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row"
        
      
    }
})