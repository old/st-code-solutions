import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function SecondaryButton(props) {



    return (
        <TouchableOpacity style={styles.secondaryButtonView}> 
            <View style={styles.flexContainer}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    secondaryButtonView: {  
        backgroundColor:  "#c0c0c0",
        borderWidth: 0.4,
        borderColor: "rgb(33, 33, 33)",
        height: '20%',
        width: '50%',

    },
    buttonText: {
        fontSize: 40,

    },
    flexContainer: {
        
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})