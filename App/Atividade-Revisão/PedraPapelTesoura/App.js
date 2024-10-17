import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

const jogadaAleatoria = () => opcoes[Math.floor(Math.random() * opcoes.length)];

export default function App() {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaApp, setEscolhaApp] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = (escolhaUsuario, escolhaApp) => {
    if (escolhaUsuario === escolhaApp) {
      return 'Empate!';
    }
    if (
      (escolhaUsuario === 'Pedra' && escolhaApp === 'Tesoura') ||
      (escolhaUsuario === 'Tesoura' && escolhaApp === 'Papel') ||
      (escolhaUsuario === 'Papel' && escolhaApp === 'Pedra')
    ) {
      return 'Você ganhou!🎉';
    } else {
      return 'Você perdeu!😞';
    }
  };

  const jogar = (escolha) => {
    const escolhaDoApp = jogadaAleatoria();
    setEscolhaUsuario(escolha);
    setEscolhaApp(escolhaDoApp);
    setResultado(calcularResultado(escolha, escolhaDoApp));
  };

  const reiniciarJogo = () => {
    setEscolhaUsuario('');
    setEscolhaApp('');
    setResultado('');
  };

  const obterImagemEscolha = (escolha) => {
    switch (escolha) {
      case 'Pedra':
        return 'https://www.pngfind.com/pngs/m/56-563277_rock-paper-scissors-png-rock-paper-scissors-clipart.png';
      case 'Papel':
        return 'https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png';
      case 'Tesoura':
        return 'https://image.pngaaa.com/787/3313787-middle.png';
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>

      <View style={styles.opcoesContainer}>
        <TouchableOpacity onPress={() => jogar('Pedra')}>
          <Image
            source={{ uri: obterImagemEscolha('Pedra') }}
            style={styles.image}
          />
          <Text style={styles.label}>Pedra</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jogar('Papel')}>
          <Image
            source={{ uri: obterImagemEscolha('Papel') }}
            style={styles.image}
          />
          <Text style={styles.label}>Papel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jogar('Tesoura')}>
          <Image
            source={{ uri: obterImagemEscolha('Tesoura') }}
            style={styles.image}
          />
          <Text style={styles.label}>Tesoura</Text>
        </TouchableOpacity>
      </View>

      {escolhaUsuario && escolhaApp ? (
        <View style={styles.resultadoContainer}>
          <View style={styles.resultadoImagesContainer}>
            <View style={styles.selecaoContainer}>
              <Image source={{ uri: obterImagemEscolha(escolhaUsuario) }} style={styles.resultadoImage} />
              <Text style={styles.resultadoText}>Você</Text>
            </View>
            
            <Text style={styles.vsText}>VS</Text>
            
            <View style={styles.selecaoContainer}>
              <Image source={{ uri: obterImagemEscolha(escolhaApp) }} style={styles.resultadoImage} />
              <Text style={styles.resultadoText}>App</Text>
            </View>
          </View>

          <Text style={styles.resultado}>{resultado}</Text>
        </View>
      ) : null}

      <Button title="Resetar partida" onPress={reiniciarJogo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  opcoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
  },
  resultadoContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  resultadoImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultadoImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  resultadoText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  vsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  selecaoContainer: {
    alignItems: 'center',
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

