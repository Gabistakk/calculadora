import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {



  return (
    <View style={styles.container}>
      <View style={styles.results}></View>
      <View style={styles.separator}></View>
      <View style={styles.block}>
        <View style={styles.column}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.column}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.column}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        </View>


        <View style={styles.column}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>=</Text>
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
    backgroundColor: '#171f25',
    justifyContent: 'center',
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '50%',
    width: '100%',
  },
  separator: {
    height: '10%',
    width: '100%',
    
  },
  results: {
    marginTop: '10%',
    backgroundColor: '#373b44',
    height: '25%',
    width: '100%',
    borderBottomWidth: 10,
    borderColor: '#010101',
    borderLeftWidth: 10,
    borderRadius: 100,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 100,
    width: '70%',
    borderWidth: 3,
    borderColor: '#114d4d'
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FBFAF5'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
    }
});
