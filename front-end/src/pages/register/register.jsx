import React, {useState} from "react";
import {StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity, ScrollView} from 'react-native';
import {TextInput} from "react-native";
import axios from "axios";


import Home from "../home/homePage";

import {useNavigate} from 'react-router-native';
import {useUserContext} from "../../context/userContext";
import {baseUrl} from "../../config";

export default function Register(props) {
    const navigate = useNavigate();
    const { onGetUser } = useUserContext();

    const [formField, setFormField] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: '',
    });

    const onChangeFormField = (name, value) => {
        setFormField({
            ...formField,
            [name]: value,
        });
    }
    const back = () => {
        // Code à exécuter lorsque le bouton est pressé.
        navigate('/login');
    }
    const validate = async () => {
        try {
            // Code à exécuter lorsque le bouton est pressé.
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regex.test(formField.email)) {
                return alert("Veuillez entrer un email valide")
            }

            if (formField.password !== formField.passwordConfirm) {
                return alert("Veuillez entrer un mot de passe identique")
            }

            await axios
                .post(`${baseUrl}/auth/register`, {
                    username: formField.username,
                    email: formField.email,
                    phone: formField.phone,
                    password: formField.password,
                    passwordConfirm: formField.passwordConfirm,
                }, {withCredentials: true})

            await onGetUser();


            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }

    // alert("Veuillez entrer un mail ou un mot de passe correct");

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
                    <TextInput style={styles.input} onChangeText={(text) => onChangeFormField('username', text)}/>
                    <Text style={styles.texteSecond}>Email</Text>
                    <TextInput style={styles.input} onChangeText={(text) => onChangeFormField('email', text)}/>
                    <Text style={styles.texteSecond}>Téléphone</Text>
                    <TextInput style={styles.input} onChangeText={(text) => onChangeFormField('phone', text)}/>
                    <Text style={styles.texteSecond}>Mot de passe</Text>
                    <TextInput style={styles.input} onChangeText={(text) => onChangeFormField('password', text)}/>
                    <Text style={styles.texteSecond}>Mot de passe</Text>
                    <TextInput style={styles.input}
                               onChangeText={(text) => onChangeFormField('passwordConfirm', text)}/>
                </View>

            </ScrollView>

            <View>
                <TouchableOpacity style={[styles.button, styles.valide]} onPress={async () => validate()}>
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
