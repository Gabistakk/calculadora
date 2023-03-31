import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';

export default function App() {


  const [visorText, setVisorText] = useState('');

  const [styleSize, setStyleSize] = useState(35);

  const [styleColor, setStyleColor] = useState('white');

  const [styleWeight, setStyleWeight] = useState('normal');

  const showToast = () => {
    ToastAndroid.show('Número de caracter máximo atingido!', ToastAndroid.LONG);
  };


  function addToVisorText(char){

    setStyleSize(35)
    setStyleColor('white')
    setStyleWeight('normal')

    if(visorText.length > 15){
      showToast()
      return
    }


    var lastCharOfVisorText = ''
    if(visorText != ''){
      lastCharOfVisorText = visorText.charAt(visorText.length - 2)
    }

    if(char == ',' && visorText == ''){
      setVisorText('0,')
    }

    if(char == '÷' || char == '%' || char == 'X' || char == '-' || char == '+' || char == ','){
      if(visorText == '' || (lastCharOfVisorText == '÷' || lastCharOfVisorText == '%' || lastCharOfVisorText == 'X' || lastCharOfVisorText == '-' || lastCharOfVisorText == '+' || visorText.charAt(visorText.length - 1) == ',')){
        return
      }
      
      if(char != ','){
      setVisorText(visorText + ' ' + char + ' ')
      return
    }
    }

    setVisorText(visorText + char)
  }

  function clearAll(){
    setVisorText('')
  }

  function clearLast(){
    if(visorText.charAt(visorText.length - 1) == ' '){
      setVisorText(visorText.slice(0, -2))
      return;
    }
    setVisorText(visorText.slice(0, -1))
  }


  function equals(){
    if(visorText.includes('÷ 0')){
      return
    }
    var lastCharOfVisorText = '';
    if(visorText != ''){
      lastCharOfVisorText = visorText.charAt(visorText.length - 2)
    }
    else{
      return
    }
    if(lastCharOfVisorText == lastCharOfVisorText == '÷' || lastCharOfVisorText == '%' || lastCharOfVisorText == 'X' || lastCharOfVisorText == '-' || lastCharOfVisorText == '+' || lastCharOfVisorText == ','){
      return
    }
    let equationString = visorText;

    equationString = equationString.replace(',', '.')
    equationString = equationString.replace('÷', '/')
    equationString = equationString.replace('X', '*')
    equationString = equationString.replace(' ', '')

    setVisorText(eval(equationString).toString());

    setStyleColor('#F9FAFD')
    setStyleSize(50)
    setStyleWeight('bold')
  }


  return (
    <View style={styles.container}>
      <View style={styles.results}>
      <Text style={{fontSize: styleSize, color: styleColor, fontWeight: styleWeight}}>{visorText}</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.block}>
        <View style={styles.column}>

        <TouchableOpacity style={styles.button} onPress={() => clearLast()}>
            <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('1')}>
            <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('4')}> 
            <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('7')}>
            <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText(',')}>
            <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.column}>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('÷')}>
            <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('2')}>
            <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('5')}>
            <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('8')}>
            <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('0')}>
            <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.column}>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('X')}>
            <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('3')}>
            <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('6')}>
            <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('9')}>
            <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => addToVisorText('%')}>
            <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        </View>


        <View style={styles.lastColumn}>
        <TouchableOpacity style={styles.lastColumnButton}onPress={() => clearAll()}>
            <Text style={styles.lastColumnText}>Ca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastColumnButton}onPress={() => addToVisorText('+')}>
            <Text style={styles.lastColumnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lastColumnButton}onPress={() => addToVisorText('-')}>
            <Text style={styles.lastColumnText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastColumnButton} onPress={() => equals()}>
            <Text style={styles.lastColumnText}>=</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  block: {
    flex: 1,
    borderColor: '#141414',
    borderWidth: 3,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '60%',
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  separator: {
    height: '5%',
    width: '100%',
    
  },
  results: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: '10%',
    backgroundColor: '#040F16',
    height: '25%',
    width: '100%',
    borderBottomWidth: 5,
    borderColor: '#00ffff',
    borderLeftWidth: 5,
    borderRadius: 100,
    paddingRight: 20,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap:2,
    alignItems: 'center'
    },
  lastColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap:2,
    alignItems: 'center'
  },
  lastColumnButton:{
    flex: 1,
    marginBottom: 2.5,
    height: '50%',
    alignItems: 'center',
    justifyContent :'center',
    backgroundColor: 'black',
    paddingBottom: 5,
    borderRadius: 100,
    width: '70%',
    borderWidth: 3,
    borderColor: '#007A7A',
    backgroundColor: '#090F20'
  },
  lastColumnText:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#EBEBEB',

  },
    button: {
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 100,
      width: '70%',
      borderWidth: 3,
      borderColor: '#00ffff'
  },
  buttonText: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#FBFAF5'
  },
  buttonTextCCHAR: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#A6EBC9',
      color: 'red',
  },
});
