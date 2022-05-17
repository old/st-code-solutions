import { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function EquationContainer(props) {
    return (
        <View style={styles.EquationContainerView}>
            <Text style={styles.equationText}>0</Text>
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
        fontSize: 130,
        marginRight: 20,
    }

})