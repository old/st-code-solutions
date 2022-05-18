import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function PrimaryButton(props) {


    const calculate = (buttonText) => {

        const operators = ["AC", "+/-", "="]
        
        const operator = operators.find((op) => op === buttonText)

        if (operator === undefined) {
            // if an operator button has not been clicked, we concat the strings together ex. "9" + "9" === "99"
            const isStartingNegative = props.equation.toString() === "-0"
            
            if (props.equation.toString().length === 1 && props.equation.toString() === "0") {
               

                props.setEquation(buttonText)
            } else {
                props.setEquation(props.equation + buttonText)
            }

        } else {
            // if an operator button has been clicked, we handle the state based on the operator   
                
                let solution = 0

                switch (operator) {
                    case "AC":
                        props.setEquation("0")
                        break
                    case "+/-":
                       "-" + props.equation.currentEquation.toString()
                        break
                    case "=":
                       props.setEquation(eval(props.equation.toString()))
                        break
                }

            }
                

       // }
        

        
   
    }
  

    return (
        <TouchableOpacity style={styles.primaryButtonView(props?.isOrange)} onPress={() => {calculate(props.buttonText)}}> 
            <View style={styles.flexContainer}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    primaryButtonView: (buttonColor)  => { 
        return {
            backgroundColor:  buttonColor ? "#ff9529" : "#c0c0c0",
            borderWidth: 0.4,
            borderColor: "rgb(33, 33, 33)",
            height: '20%',
            width: '25%',
        }

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