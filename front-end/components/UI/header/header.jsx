import React, {useState} from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

//import Swipeout from 'react-native-swipeout';
//import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigate } from 'react-router-native';


export default function Header (props) {

    const navigate = useNavigate();

    const films = () => {
      // Code à exécuter lorsque le bouton est pressé.
      try {
        navigate('/films');
      } catch (error) {
        console.log(error);
      }
    };
    const series = () => {
      // Code à exécuter lorsque le bouton est pressé.
      try {
        navigate('/series');
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.viewButtonHeader}>
                    <TouchableOpacity>
                      <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonHeader} onPress={films}>
                        <Text style={styles.texteHeader}>
                            Films
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonHeader} onPress={series}>
                        <Text style={styles.texteHeader}>
                            Séries
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    header: {
        backgroundColor: /*'#111223'*/ '#222334',
        color: 'white',
        width: '100%',
        height: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        //borderRadius: 21,
        borderBottomLeftRadius: 21,
        borderBottomRightRadius: 21,
    },
    texteHeader: {
        color: '#f1f1f1',
        textAlign: 'justify',
        marginHorizontal: 'auto',
        fontSize: 13,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    viewButtonHeader: {
        width: '100%',
        height: 'auto',
        //margin: 'auto',
        marginTop: 34,
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 21,
        borderBottomRightRadius: 21,
        //flex: 1,
      },
      buttonHeader: {
        backgroundColor: '#404040',
        width: 89,
        height: 34,
        borderRadius: 8,
        margin: 5,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        //flex: 1,
      },
      images: {
        backgroundColor: '#404040',
        width: 34,
        height: 34,
        margin: 5,
        borderRadius: 8,
      },
})