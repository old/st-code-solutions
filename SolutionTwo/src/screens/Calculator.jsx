import { useState } from 'react';
import { StyleSheet, SafeAreaView, View} from 'react-native';
import EquationContainer from '../components/EquationContainer';
import ButtonsContainer from '../components/ButtonsContainer';
export default function Calculator(props) {

    const [equation, setEquation] = useState("0")

    return (
        <View style={styles.calculatorView}>
            <EquationContainer equation={equation}/>
            <ButtonsContainer equation={equation} setEquation={setEquation}/>
        </View>
    )

}

const styles = StyleSheet.create({
    calculatorView: {
        backgroundColor: "rgb(33, 33, 33)",
        flex: 1,
        flexDirection: "column",

    }

})