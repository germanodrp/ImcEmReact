import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {nome:"", peso: '', altura: '', info: '-', resultado: 0.0}
    this.calculaIMC = this.calculaIMC.bind(this)
  }
  
  calculaIMC(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    if(s.resultado < 18.5){
      s.info ='Menor que 18,5, seu quadro é de: Magreza 💪🏻😶'
    }
    else if (s.resultado < 24.9){
     s.info ='Entre 18,5 e 24,9, seu quadro é: Normal 💪🏻😊'
    }
    else if (s.resultado < 29.9){
     s.info ='Entre 25,0 e 29,9, você está com: Sobrepeso 💪🏻😐'
    }
    else if (s.resultado < 39.9) {
     s.info ='Entre 30,0 e 39,9, tome cuidado, você está com: Obesidade 💪🏻😣'
    }
    else if (s.resultado > 39.9) {
     s.info ='Maior que 40,0, você está com: Obesidade Grave 💪🏻🙆🏻‍♂️🤦🏻‍♂️🏃🏻‍♂️'
    }
    this.setState(s)
  }

  clear = () => {
    this.setState({
      nome:"",
      peso: '',
      altura: '',
      resultado: 0.0,
      info: '-'
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
         <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={nome => this.setState({ nome })}
          value={this.state.nome}
          placeholder='Exemplo: Germano'
          keyboardType={'string'}
        />
        <separator/>
        <Text style={styles.text}>Altura (m)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          placeholder='Exemplo: 1,75'
          keyboardType={'numeric'}
        />
        <Text style={styles.text}>Peso (kg)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder='Exemplo: 68,8'
          keyboardType={'numeric'}
        />
        <Separator />
        <Button
          onPress={this.calculaIMC}
          title='Calcula'
          color='green'
          accessibilityLabel='Clique aqui para calcular seu IMC'
        />
        <Separator/>
        <Button
          onPress={this.clear}
          title='Limpa'
          color='red'
          accessibilityLabel='Botão para limpar os valores'
        />
        <Separator />
        <Text style={styles.input}>
        {this,this.state.nome}, Seu IMC é: {this.state.resultado.toFixed(2)} {this.state.info}
        </Text>
      </View>
    );
  }
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 25,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderWidth: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 10,
    margin: 15,
    borderRadius: 20
  }
});