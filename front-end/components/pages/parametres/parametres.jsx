import React, {useState} from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';


import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import Version from "../../UI/version/version";
import {useUserContext} from "../../context/userContext";


export default function Parametres () {
  const { user } = useUserContext()

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
            <Text style={styles.textezone}>Nom : {user?.username}</Text>
            <Text style={styles.textezone}>Email : {user?.email}</Text>
            <Text style={styles.textezone}>Téléphone : {user?.phone}</Text>
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
