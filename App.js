import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import Button from "./assets/components/button";

import { ResultText } from './assets/components/button';



export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.results}>
      <ResultText ></ResultText>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.block}>
        <View style={styles.column}>
        <Button char='C'/>
        <Button char='1'/>
        <Button char='4'/>
        <Button char='7'/>
        <Button char='÷'/>
        </View>

        <View style={styles.column}>
        <Button char=','/>
        <Button char='2'/>
        <Button char='5'/>
        <Button char='8'/>
        <Button char='1'/>
        </View>
        
        <View style={styles.column}>
        <Button char='%'/>
        <Button char='3'/>
        <Button char='6'/>
        <Button char='9'/>
        <Button char='0'/>
        </View>


        <View style={styles.column}>
        <Button char='C'/>
        <Button char='×'/>
        <Button char='÷'/>
        <Button char='-'/>
        <Button char='+'/>
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
  resultText: {
    color: 'white',
    fontSize: 35
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap:2,
    alignItems: 'center'
    }
});
