import React, {useState} from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';


import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Version from "../../components/version/version";
import {useUserContext} from "../../context/userContext";
import axios from "axios";
import {baseUrl} from "../../config";


export default function Parametres () {
  const { user, onResetUser } = useUserContext()

  const delAcompt = "Déconnexion de votre compte !";

  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      alert(delAcompt);

      await axios
          .post(`${baseUrl}/auth/logout`, {}, {withCredentials: true})

      onResetUser();
      navigate('/');
    } catch (error) {
      console.log(error);
    };
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.texteFirst}>Paramètres</Text>
        </View>

        <View style={styles.viewProfile}>
          <Text style={styles.textezone}>
            Informations personnelles :
          </Text>
          <View style={styles.zone}>
            <Text style={styles.textezone}>Nom : {user?.username}</Text>
            <Text style={styles.textezone}>Email : {user?.email}</Text>
            <Text style={styles.textezone}>Téléphone : {user?.phone}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={onLogout} style={styles.supcompte}>
            <Text style={styles.textsupcompte}>
              Déconnexion
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
