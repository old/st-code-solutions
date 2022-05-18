import { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function EquationContainer(props) {
    return (
        <View style={styles.EquationContainerView}>
            <Text style={styles.equationText}>{props.equation}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    EquationContainerView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    equationText: {
        fontWeight: "200",
        color: "white",
        fontSize: 80,
        marginRight: 20,
    }

})