import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';


export default function ButtonsContainer() {
    return (
        <View style={styles.ButtonsContainerView}>
            <PrimaryButton buttonText="AC"/>
            <PrimaryButton buttonText="+/-"/>
            <PrimaryButton buttonText="%"/>
            <PrimaryButton buttonText="/"/>

            <PrimaryButton buttonText="7"/>
            <PrimaryButton buttonText="8"/>
            <PrimaryButton buttonText="9"/>
            <PrimaryButton buttonText="x"/>

            <PrimaryButton buttonText="4"/>
            <PrimaryButton buttonText="5"/>
            <PrimaryButton buttonText="6"/>
            <PrimaryButton buttonText="-"/>

            <PrimaryButton buttonText="1"/>
            <PrimaryButton buttonText="2"/>
            <PrimaryButton buttonText="3"/>
            <PrimaryButton buttonText="+"/>

            <PrimaryButton buttonText="0"/>
            <PrimaryButton buttonText="."/>
            <PrimaryButton buttonText=""/>
            <PrimaryButton buttonText="="/>
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