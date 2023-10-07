import React, {useState} from "react";
import {StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';

//import Swipeout from 'react-native-swipeout';
//import { SwipeListView } from 'react-native-swipe-list-view';
import {useNavigate} from 'react-router-native';


export default function Footer() {

    const navigate = useNavigate();
    const home = () => {
        // Code à exécuter lorsque le bouton est pressé.
        try {
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    const profile = () => {
        // Code à exécuter lorsque le bouton est pressé.
        try {
            navigate('/profile');
        } catch (error) {
            console.log(error);
        }
    };
    const parametres = () => {
        // Code à exécuter lorsque le bouton est pressé.
        try {
            navigate('/parametres');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.footer}>
                <View style={styles.viewButtonFooter}>
                    <TouchableOpacity style={[styles.buttonFooter, styles.autre]} onPress={home}>
                        <Image style={styles.images} source={require('../../media/footer/ico-home.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonFooter, styles.profile]} onPress={profile}>
                        <Image style={styles.images} source={require('../../media/footer/ico-profile.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonFooter, styles.autre]} onPress={parametres}>
                        <Image style={styles.images} source={require('../../media/footer/ico-parametres.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    footer: {
        backgroundColor: /*'#ffffff'*/ /*'#111223'*/ '#222334',
        color: 'white',
        width: '89%' /*318*/,
        height: 'auto',
        alignItems: 'center',
        marginRight: 21,
        marginLeft: 21,
        borderRadius: 100,
    },
    viewButtonFooter: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 21,
        borderBottomRightRadius: 21,
    },
    buttonFooter: {
        //backgroundColor: '#404040',
        width: 34,
        height: 34,
        borderRadius: 8,
        margin: 15,
        justifyContent: 'center',
        textAlign: 'center',
    },
    images: {
        width: 34,
        height: 34,
    },
    profile: {
        backgroundColor: '#a1a2a3',
        //border: 15,
        borderRadius: 89,
        width: 55,
        height: 55,
        alignItems: 'center',
    },
    autre: {
        borderRadius: 89,
        width: 55,
        height: 55,
        alignItems: 'center',
    },
})
