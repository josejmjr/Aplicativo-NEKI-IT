import React, { Component } from 'react'
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {

  clicou = () => {
    Alert.alert('S2P2', 'Você está logado!');
  }

  render() {
    return (

      <LinearGradient colors={['#04b6b8', '#1b536a']} style={styles.mainContainer}>
        <View style={styles.mainContainer}>
          <Image
            source={require('./src/imagens/neki.png')}
            style={styles.logo}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            placeholderTextColor="#04b6b8"
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua senha"
            placeholderTextColor="#04b6b8"
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={() => { this.clicou() }}
          >
            <Text style={styles.botaoText}>Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: 130,
    height: 135,
    marginBottom: 50,
    //marginTop: 40,
    opacity: .6
  },
  input: {
    marginTop: 10,
    width: 300,
    backgroundColor: 'transparent',
    borderBottomColor: '#ffffff',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderWidth: 1,
    fontSize: 16,
    fontWeight: '300',
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    width: 250,
    height: 42,
    borderColor: '#00ff8c',
    borderWidth: 1,
    padding: 20,
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  }
})
