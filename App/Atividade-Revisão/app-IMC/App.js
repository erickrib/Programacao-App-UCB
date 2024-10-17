import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';
import TextField from './Texfield';

const Label = ({ text }) => {
  return <Text style={styles.label}>{text}</Text>;
};

export default function App() {
  const [imcValue, setImcValue] = useState("");
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [classificationIMC, setClassificationIMC] = useState('');

  const imcRanges = [
    { min: 0, max: 17, message: 'Muito abaixo do peso' },
    { min: 17, max: 18.49, message: 'Abaixo do peso' },
    { min: 18.5, max: 24.99, message: 'Peso normal' },
    { min: 25, max: 29.99, message: 'Acima do peso' },
    { min: 30, max: 34.99, message: 'Obesidade I' },
    { min: 35, message: 'Obesidade II' }
  ];

  const calculateImc = () => {
    const weight = parseFloat(peso.replace(',', '.'));
    const height = parseFloat(altura.replace(',', '.'));

    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
      const imc = weight / (height * height);
      const imcFixed = imc.toFixed(2);
      setImcValue(imcFixed);
      const classification = getImcClassification(parseFloat(imcFixed));
      setClassificationIMC(classification);
    } else {
      setImcValue('Inválido');
      setClassificationIMC('Nada a declarar');
    }
  };

  const getImcClassification = (imc) => {
    if (imc < 17) {
      return 'Muito abaixo do peso';
    } else if (imc >= 17 && imc <= 18.49) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.99) {
      return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.99) {
      return 'Acima do peso';
    } else if (imc >= 30 && imc <= 34.99) {
      return 'Obesidade I';
    } else {
      return 'Obesidade II';
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cálculo de IMC</Text>
      <Image
        source={{
          uri: 'https://us.123rf.com/450wm/collagem/collagem2006/collagem200600044/148904062-concepto-de-pérdida-de-peso-índice-de-masa-corporal-antes-y-después-de-la-dieta-y-el-fitness.jpg?ver=6',
        }}
        style={styles.image}
      />
      <View style={styles.form}>
        <Label text="Peso (kg)" />
        <TextField
          value={peso}
          onChangeText={setPeso}
          placeholder="Digite seu peso"
        />
        <Label text="Altura (cm)" />
        <TextField
          value={altura}
          onChangeText={setAltura}
          placeholder="Digite sua altura"
        />
        <Button onPress={calculateImc} title="Calcular" />
        {imcValue && (
          <>
            <Text style={styles.result}>{`Resultado: ${imcValue}.`}</Text>
            <Text style={styles.classification}>{`Classificação: ${classificationIMC}.`}</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  form: {
    marginVertical: 16,
    marginHorizontal: 16
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  textField: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  textFieldFocused: {
    borderColor: 'orange',
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  classification: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginHorizontal: 'auto',
  }
});
