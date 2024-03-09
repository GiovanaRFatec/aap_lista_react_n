import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';
import { useState } from 'react';



async function carregaProdutos(){
 var lista = await fetch("https://web-wfiwe9krz76p.up-de-fra1-1.apps.run-on-seenode.com/api/produtos",
 { method: "GET", 
     headers: {
  "Content-Type": "application/json",
  // 'Content-type': 'application/x-www-form-urlencoded',
     }
  });
 console.log(lista.json());
 setListaProdutos(lista.json());

 }


export default function App() {
  const [listaProdutos,setListaProdutos] = useState([]);

  async function carregaProdutos(){
    var resp = await fetch("https://web-wfiwe9krz76p.up-de-fra1-1.apps.run-on-seenode.com/api/produtos",
    console.log(await resp.json());
    setListaProdutos(resp.json());
    } l

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>PRODUTOS</List.Subheader> 

            {listaProdutos.map((produto) => {
              return (
              <List.Item title={produto.nome} left={() => <List.Icon icon="cellphone" />} right={()=><Text>{produto.preco}</Text>}/>
            )}
            )
            }

       
           

        </List.Section>
        <Button onPress={()=>{carregaProdutos()}} modde="elevated" >Carregar</Button>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
