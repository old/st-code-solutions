import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function PrimaryButton(props) {


    const calculate = (buttonText) => {

        const operators = ["AC", "+/-", "="]
        
        const operator = operators.find((op) => op === buttonText)

        console.log("error")
        console.log(props)

        if (operator === undefined) {
            // if an operator button has not been clicked, we concat the equation together ex. "9" + "9" === "99"
            
            if (props.equation.toString().length === 1 && props.equation.toString() === "0") {
                // if it is the starting number "0", once a button is clicked, the starting 0 gets removed/replaced 
                // with the button that has been clicked
               

                props.setEquation(buttonText)
            } else {
                props.setEquation(props.equation + buttonText)
            }

        } else {
            // if an operator button has been clicked, we handle the state based on the operator   

                switch (operator) {
                    case "AC":
                        // "AC" is the clear operator. when the "AC" button is clicked the equatiokn state is reset (cleared)
                        props.setEquation("0")
                        break
                    case "+/-":
                        // "+/-" is a operator that converts the number into a negative number ex. "2" -> "-3"
                       "-" + props.equation.currentEquation.toString()
                        break
                    case "=":
                        // "=" solves the equation by passing it through eval()
                       props.setEquation(eval(props.equation.toString()))
                        break
                }

            }
                

       // }
        

        
   
    }
  

    return (
        <TouchableOpacity style={styles.primaryButtonView(props?.isOrange, props?.isLong)} onPress={() => {calculate(props.buttonText)}}> 
            <View style={styles.flexContainer}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    primaryButtonView: (buttonColor, isLong)  => { 
        return {
            backgroundColor:  buttonColor ? "#ff9529" : "#c0c0c0",
            borderWidth: 0.4,
            borderColor: "rgb(33, 33, 33)",
            height: '20%',
            width: isLong ? '50%' : '25%',
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