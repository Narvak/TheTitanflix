import {StyleSheet, View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import * as React from 'react';

import {useNavigate} from 'react-router-native';

export default function Version(props) {
    const navigate = useNavigate();

    const MainPage = () => {
        // Code à exécuter lorsque le bouton est pressé.
        try {
            navigate('/');
            //console.log(props, '/home',);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={MainPage}>
                    <Text style={styles.texteVersion}>
                        &copy; Titanflix 2023. V1.0.0
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    texteVersion: {
        color: '#f1f1f1',
        textAlign: 'center',
        marginHorizontal: 'auto',
        fontSize: 13,
    },
    viewcenter: {
        alignItems: 'center',
    }
});
