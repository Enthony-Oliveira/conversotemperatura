import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function App() {

  const [valor, setValor] = useState('');

  function conversor() {

    const numero = Number(valor.replace(',', '.'));

    if (valor.trim() === '' || isNaN(numero)) {
      Alert.alert("Digite um valor valido");
      return;

    }

    const fahrenheit = (numero * 1.8) + 32;

    Alert.alert(
      "Conversão Realizada",
      `O Resultado é ${fahrenheit.toFixed(2)} °F`,
      [
        {
          text: "Ok",
          onPress: () => {
            setValor('');
          }
        }
      ]
    );

  }

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.tittle}>Conversor de Temperatura</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.titleconteudo} >Digite a Temperatura</Text>
        <TextInput
          placeholder='Digite Aqui'
          style={styles.conteudo}
          value={valor}
          onChangeText={setValor}
          keyboardType='numeric'>

        </TextInput>

        <TouchableOpacity style={styles.btn} onPress={conversor}>
          <Text style={styles.btntext}>Converter</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  appbar: {
    height: 70,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    elevation: 4
  },

  tittle: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleconteudo: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#000',
  },

  conteudo: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    fontSize: 16,
    margin: 10,
    width: '80%',
  },

  btn: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },

  btntext: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: '#fff'
  }
});
