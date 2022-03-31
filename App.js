import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



export default function App() {

  const [nome, setNome] = useState('');

  const [showEmoji, setShowEmoji] = useState(false);



  function handleDescriptionChange(pnome) {

    setNome(pnome);

    if (pnome.length > 0)

      setShowEmoji(true);

    else

      setShowEmoji(false);

  }



  function handleButtonPress() {

    alert('oi ' + nome);

  }



  return (

    <View style={styles.container}>

      <Text style={styles.title}>Olá mundo!</Text>

      <View style={styles.inputContainer}>

        <TextInput

          style={styles.input}

          placeholder="Digite seu nome"

          onChangeText={handleDescriptionChange}

        />

        <TouchableOpacity

          style={styles.button}

          onPress={handleButtonPress}

        >

          <Text style={styles.buttonText}>Enviar</Text>

        </TouchableOpacity>

        <Text style={styles.input}>{showEmoji}</Text>

        <Text style={styles.input}>{nome}</Text>

        <Text style={styles.input}>{nome.length}</Text>

        {showEmoji ? <Text style={styles.input}>??</Text> : ''}

      </View>

      <StatusBar style="auto" />

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',

  },

  title: {

    color: 'red',

    fontSize: 20,

    fontWeight: 'bold',

    marginTop: 50,

  },

  inputContainer: {

    flex: 1,

    marginTop: 30,

    width: '90%',

    padding: 20,

    borderTopLeftRadius: 10,

    borderTopRightRadius: 10,

    alignItems: 'stretch',

    backgroundColor: '#fff'

  },

  input: {

    marginTop: 10,

    height: 60,

    backgroundColor: '#fff',

    borderRadius: 10,

    paddingHorizontal: 24,

    fontSize: 16,

    alignItems: 'stretch'

  },

  button: {

    marginTop: 10,

    height: 60,

    backgroundColor: 'red',

    borderRadius: 10,

    paddingHorizontal: 24,

    fontSize: 16,

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 20,

    shadowOpacity: 20,

    shadowColor: '#ccc',

  },

  buttonText: {

    color: '#fff',

    fontWeight: 'bold',

  }

});