import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';


export default function ButtonsContainer(props) {

    return (
        <View style={styles.ButtonsContainerView}>
            <PrimaryButton buttonText="AC"  equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="-" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="%"   equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="/"   equation={props.equation} setEquation={props.setEquation}isOrange={true}/>

            <PrimaryButton buttonText="7" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="8" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="9" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="x" equation={props.equation} setEquation={props.setEquation} isOrange={true}/>

            <PrimaryButton buttonText="4" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="5" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="6" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="-" equation={props.equation} setEquation={props.setEquation} isOrange={true}/>

            <PrimaryButton buttonText="1" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="2" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="3" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="+" equation={props.equation} setEquation={props.setEquation} isOrange={true}/>

            <SecondaryButton buttonText="0" equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="."   equation={props.equation} setEquation={props.setEquation}/>
            <PrimaryButton buttonText="="   equation={props.equation} setEquation={props.setEquation}isOrange={true}/>
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