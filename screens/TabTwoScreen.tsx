import { StyleSheet, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import logo from '../assets/images/logo.png'; 

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={logo}
      />

      <Text style={styles.texttitle} >Welcome to Forth Valley Historical App</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text} >We will be adding more content as we progress the learning we are gaining from creating this app.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  texttitle: {
    fontWeight: 'bold',

  },
  separator: {
    height: 2,
    width: '80%',
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    width: '80%',
    marginVertical: 10,
  },
  tinyLogo: {
    marginTop: 50,
  },
});
