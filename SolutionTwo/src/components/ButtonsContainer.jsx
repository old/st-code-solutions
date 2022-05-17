import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';


export default function ButtonsContainer() {
    return (
        <View style={styles.ButtonsContainerView}>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>

            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>

            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>

            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>

            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText=""/>
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