import React, {Component} from 'react'
import {Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native'

export default class App extends Component{

  clicou = () => {
    Alert.alert('S2P2', 'Você está logado!');
  }

  render() {
    return(
      <View style={styles.container}>
        
        <Image
          source={require('./src/imagens/NEKI_IT_Logo_PNG-Branco.png')}
          style={styles.logo}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />

        <TouchableOpacity 
        style={styles.botao}
        onPress={ () => {this.clicou()} }
        >
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1b536a"
  },
  logo:{
    width: 300,
    height: 83
  },
  input: {
    marginTop: 10,
    width: 300,
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    padding: 10,  
  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#02bdbf',
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
})
