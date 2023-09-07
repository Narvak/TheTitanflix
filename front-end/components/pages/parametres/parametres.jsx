import React, {useState} from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';


import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import Version from "../../UI/version/version";
import axios from "axios";


export default function Parametres (props) {

  const delAcompt = "Votre compte est supprimer";
  const delAcomptConsoleLog = "compte supprimer";

  const navigate = useNavigate();
  const supCompte = () => {
    try {
      alert(delAcompt);
      navigate('/');
      console.log(delAcomptConsoleLog);
    } catch (error) {
      console.log(error);
    };
  };


  const InfoPerso = () => {
    axios
      .get()
  }


  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Header />
      </View>

      <ScrollView>
        <View>
          <Text style={styles.texteFirst}>Parametres</Text>
        </View>

        <View style={styles.viewProfile}>
          <Text style={styles.textezone}>
            Informations personelles :
          </Text>
          <View style={styles.zone}>
            <Text style={styles.textezone}>Name : {name}</Text>
            <Text style={styles.textezone}>Mail : {mail}</Text>
            <Text style={styles.textezone}>Phone : {phone}</Text>
            <Text style={styles.textezone}>Password : {password}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={supCompte} style={styles.supcompte}>
            <Text style={styles.textsupcompte}>
              Suprimer le compte.
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Version />
        </View>

      </ScrollView>

      <View>
        <Footer />
      </View>

    </SafeAreaView>
  );
}

/*
  <View styles={styles.zone}>
    <Text style={styles.textezone}>Name : ${Name}</Text>
    <Text style={styles.textezone}>Email : ${Email}</Text>
    <Text style={styles.textezone}>Phone : ${Phone}</Text>
    <Text style={styles.textezone}>Password : ${Password}</Text>
  </View>*/




//Le style de la page.
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: '#f1f1f1',
    flex: 1,
    //textAlign: 'justify',
  },
  texteFirst: {
    color: '#f1f1f1',
    textAlign: 'justify',
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 34,
    margin: 'auto',
    textAlign: 'center',
  },
  texteSecond: {
    color: '#f1f1f1',
    textAlign: 'justify',
    marginHorizontal: 'auto',
    fontSize: 21,
  },
  button: {
    backgroundColor: '#f6f6f6',
    color: '#f1f1f1',
    marginVertical: 21,
  },
  zone: {
    backgroundColor: '#404040',
    color: 'white',
    width: '100%',
    height: 'auto',
    margin: 'auto',
    padding: 15,
  },
  textezone: {
    color: 'white',
    fontSize: 21,
    padding: 10,
  },
  supcompte: {
    backgroundColor: 'red',
    justifyContent: 'center',
    margin: 'auto',
    marginVertical: 21,
    marginHorizontal: 'auto',
    borderRadius: 10,
    width: 144,
    height: 55,
  },
  textsupcompte: {
    color: 'yellow',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

})