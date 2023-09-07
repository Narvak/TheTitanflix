import React, {useState} from "react";
import {StyleSheet, Button, View, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Home from "../home/homePage";
import Register from "../register/register";
import Version from "../../UI/version/version";

import {useNavigate} from 'react-router-native';
import axios from "axios";
import {useSeriesContext} from "../../context/seriesContext";
import {useUserContext} from "../../context/userContext";

export default function Login() {
    const navigate = useNavigate();
    const { onGetUser } = useUserContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onNavigateToRegister = () => {
        // Code à exécuter lorsque le bouton est pressé.
        try {
            navigate('/register');
        } catch (error) {
            console.log(error);
        }
    };

    function isEmailValid(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const onLogin = async () => {
        // Code à exécuter lorsque le bouton est pressé.
        try {
            if (!isEmailValid) {
                return console.log("null or undefined");
            }

            if (isEmailValid) {
                await axios
                    .post('http://localhost:5000/auth/login', {
                        email,
                        password
                    }, {withCredentials: true})

                await onGetUser();

                navigate("/")
            }
            navigate('/');

        } catch (err) {
            console.error(err)
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.texteFirst}>Connexion</Text>
            </View>

            <View>
                <Text style={styles.texteSecond}>Votre email</Text>
                <TextInput style={styles.input} onChangeText={(text) => setEmail(text)}/>

                <Text style={styles.texteSecond}>Votre mot de passe</Text>
                <TextInput style={styles.input} onChangeText={(text) => setPassword(text)}/>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={onLogin}>
                    <Text style={styles.textbutton}>Valider &rarr;</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.margintop]} onPress={onNavigateToRegister}>
                    <Text style={styles.textbutton}>Créer un compte</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Version/>
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
