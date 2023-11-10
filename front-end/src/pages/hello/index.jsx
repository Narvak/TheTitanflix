//tous les import de la page.
import { StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';

  //tous les import des différans elements.
import Version from '../../components/version/version';
import { useNavigate } from 'react-router-native';


//La class Hello exporter par default.
export default function Index(props) {

  const navigate = useNavigate();

  const handlePress = () => {
    // Code à exécuter lorsque le bouton est pressé.
    navigate('/login');
  };

      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewcenter}>
              <View>
                <Text style={styles.texteFirst}>Bienvenue sur</Text>
                <Text style={styles.titanflix}>Titanflix</Text>
                  <Text style={styles.texteSecond}>L'application d'animes les plus titanesques du moment.</Text>
              </View>

              <View style={styles.viewcenter}>
                <Text style={styles.texteSecond}>100% gratuite, open source et sans pub.</Text>
              </View>

              <View>
                <TouchableOpacity style={styles.buttonlogin} onPress={handlePress}>
                  <Text style={styles.textbutton}>Connexion</Text>
                </TouchableOpacity>
              </View>
            </View>

          <View>
            <Index />
          </View>
        </SafeAreaView>
      );
}


//Le style de l'ecrant.
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
  },
  titanflix: {
    color: 'red',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
  },
  texteSecond: {
    color: '#f1f1f1',
    textAlign: 'center',
    marginHorizontal: 'auto',
    fontSize: 21,
  },
  buttonlogin: {
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
  texteVersion: {
    color: '#f1f1f1',
    textAlign: 'center',
    marginHorizontal: 'auto',
    fontSize: 13,
  },
  viewcenter: {
    width: '89%',
    height: 'auto',
    alignItems: 'center',
    margin: 21,
  }
});
