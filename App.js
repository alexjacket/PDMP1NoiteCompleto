import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  View
} from 'react-native';
import ExibeItens from './components/ExibeItens';
import EntradaDeDados from './components/EntradaDeDados';

export default class App extends React.Component {

  //const [itens, setItens] = useState([]) //ele vai servir para trazer a descricao e os fabricantes usando uma JSX

  constructor(props) {
    super(props);
    this.state = {
      itens: [],
      contador: 0
    }
  }

  render() {
    

      const inserirItens = (fabricante, descricao) =>{

        let itemInserido = {
          fabricante: fabricante,
          descricao: descricao,
          key: this.state.contador.toString()
        }

        this.setState({
          itens: [...this.state.itens, itemInserido],
          contador: this.state.contador +1
        })
        console.log(this.state.itens)
        

      }
      return (
      <View>
        <EntradaDeDados funcao={inserirItens} />
        <ExibeItens itens={this.state.itens} />
      </View>
    );
  }
}
