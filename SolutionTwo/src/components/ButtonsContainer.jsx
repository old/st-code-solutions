import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';


export default function ButtonsContainer() {

    const add = () => {}
    const subtract = () => {}
    const multiply = () => {}
    const divide = () => {}
    const equal = () => {}
    const negative = () => {}
    const clear = () => {}
    return (
        <View style={styles.ButtonsContainerView}>
            <PrimaryButton buttonText="AC"/>
            <PrimaryButton buttonText="+/-"/>
            <PrimaryButton buttonText="%"/>
            <PrimaryButton buttonText="/" isOrange={true}/>

            <PrimaryButton buttonText="7"/>
            <PrimaryButton buttonText="8"/>
            <PrimaryButton buttonText="9"/>
            <PrimaryButton buttonText="x" isOrange={true}/>

            <PrimaryButton buttonText="4"/>
            <PrimaryButton buttonText="5"/>
            <PrimaryButton buttonText="6"/>
            <PrimaryButton buttonText="-" isOrange={true}/>

            <PrimaryButton buttonText="1"/>
            <PrimaryButton buttonText="2"/>
            <PrimaryButton buttonText="3"/>
            <PrimaryButton buttonText="+" isOrange={true}/>

            <SecondaryButton buttonText="0"/>
            <PrimaryButton buttonText="."/>
            <PrimaryButton buttonText="=" isOrange={true}/>
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