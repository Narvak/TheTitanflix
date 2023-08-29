import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from "react-native";
import axios from "axios";


import Home from "../home/homePage";

import { useNavigate } from 'react-router-native';

export default function Register (props) {
  const navigate = useNavigate();
  const back = () => {
    // Code à exécuter lorsque le bouton est pressé.
    navigate('/login');
  }
  const valider = () => {
    // Code à exécuter lorsque le bouton est pressé.
  
    // function isEmailValid(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // return regex.test(email);
    // }

      // navigate('/home');
      try {
        axios
          .get('http://localhost:19008/users')
          .then(response => {
            setPosts(response.data);
          })
          .then(req => {
            return regex.test(email);
          })
          .catch(error => {
            console.error(error);
          })
          .finally(navigate => {
            if (!regex.test(email)) {
              alert("Veuillez entrer un email valide")
            } else{
              navigate("/home");
            }
          });
        console.log(axios);
      } catch (error) {
        console.log(error);
      };

        // alert("Veuillez entrer un mail ou un mot de passe correct");
  };

    return (
      <SafeAreaView style={styles.container}>

          <View>
            <TouchableOpacity style={[styles.button, styles.back]} onPress={back}>
              <Text style={styles.textbutton}>&larr; Back</Text>
            </TouchableOpacity>
          </View>

        <ScrollView>
          <View>
            <Text style={styles.texteFirst}>Créer un compte</Text>
          </View>

          <View>
            <Text style={styles.texteSecond}>Nom</Text>
              <TextInput style={styles.input}></TextInput>
            <Text style={styles.texteSecond}>Email</Text>
              <TextInput style={styles.input}></TextInput>
            <Text style={styles.texteSecond}>Téléphone</Text>
              <TextInput style={styles.input}></TextInput>
            <Text style={styles.texteSecond}>Mot de passe</Text>
              <TextInput style={styles.input}></TextInput>
            <Text style={styles.texteSecond}>Mot de passe</Text>
              <TextInput style={styles.input}></TextInput>
          </View>

        </ScrollView>

          <View>
            <TouchableOpacity style={[styles.button, styles.valide]} onPress={valider}>
              <Text style={styles.textbutton}>Valider &rarr;</Text>
            </TouchableOpacity>
          </View>

      </SafeAreaView>
    );
}


//Le style de la page.
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texteFirst: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 13,
    marginTop: 13,
  },
  texteSecond: {
    color: '#f1f1f1',
    textAlign: 'center',
    marginHorizontal: 'auto',
    marginVertical: 21,
    fontSize: 21,
  },
  input: {
    backgroundColor: '#f1f1f1',
    color: 'black',
    width: 233,
    height: 34,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#404040',
    justifyContent: 'center',
    margin: 'auto',
    marginVertical: 21,
    marginHorizontal: 'auto',
    borderRadius: 10,
  },
  back: {
    width: 89,
    height: 34,
    marginTop: 34,
  },
  valide: {
    width: 144,
    height: 55,
  },
  textbutton: {
    color: '#f1f1f1',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margintop: {
    marginTop: 144,
  }
});