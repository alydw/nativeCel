import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, Button} from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import { useState } from "react";

export default function App() {
  const Nome = () => {
  const [nome, setNome] = useState('');
  let nomeUsuario = ('');

  return (
    <View>
    <Text style={styles.titulo}>{nome}</Text>
    <Text style={styles.paragraph}>
        Nome:
      </Text>
    <TextInput
        style={styles.input}
        placeholder="Insira seu nome"
        keyboardType="text"
        onChange={event => nomeUsuario = event.target.value}
      />
    <Button style={styles.button}
      onPress={() => setNome(nomeUsuario)}
        title="Confirm"
        color="#f499ff"
      />
    </View>
  )
}
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./assets/background.jpg')} resizeMode="cover" style={styles.imageBackground}> 
      <Nome/>
      <AssetExample>
      </AssetExample>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageBackground: {
    height: 400,
    width: 300,
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 35,
    borderBottonwidth: 45,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    margin: 15,
    fontSize: 20,
  }
});
