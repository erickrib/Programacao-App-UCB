import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularCombustivel = () => {
    const alcool = parseFloat(precoAlcool.replace(',', '.'));
    const gasolina = parseFloat(precoGasolina.replace(',', '.'));

    if (!isNaN(alcool) && !isNaN(gasolina) && alcool > 0 && gasolina > 0) {
      const ratio = alcool / gasolina;
      if (ratio < 0.7) {
        setResultado('Abasteça com Álcool, é mais vantajoso');
      } else {
        setResultado('Abasteça com Gasolina, é mais vantajoso');
      }
    } else {
      setResultado('Por favor, insira valores válidos');
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Comparação de Combustível</Text>

      <Image
        source={{
          uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/40973697-feliz-fofa-carro-desenho-animado-personagem-as-gas-estacao-ser-preenchidas-com-combustivel-mao-desenhado-ilustracao-isolado-em-transparente-fundo-vetor.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.form}>
        <Text style={styles.label}>Preço do Álcool (R$)</Text>
        <TextInput
          style={styles.input}
          value={precoAlcool}
          onChangeText={setPrecoAlcool}
          placeholder="Digite o preço do álcool"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Preço da Gasolina (R$)</Text>
        <TextInput
          style={styles.input}
          value={precoGasolina}
          onChangeText={setPrecoGasolina}
          placeholder="Digite o preço da gasolina"
          keyboardType="numeric"
        />

        <Button title="Calcular" onPress={calcularCombustivel} />

        {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginHorizontal: 'auto',
  },
  form: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
  },
});
