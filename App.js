import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container1}>

      <View style={styles.caixa}>
        <FontAwesome name="github-square" size={70} color="black" />
        <View>
          <Text style={styles.titulo}>Fulano de Tal</Text>
          <Text>Subtitulo</Text>
        </View>
      </View>
      <View style={styles.caixa2}>
        <Text style={styles.diogo}>Oi tudo bom ?Como vai vc? Obrigado professor por esse trabalho genial e aula esclarecedora</Text>
        <View style={styles.leandro}>
          <FontAwesome name="trash-o" size={24} color="black" />
          <FontAwesome name="send" size={24} color="black" />
        </View>
      </View>
      <View style={styles.caixa2}>
        <Text style={styles.diogo}>Oi tudo bom ?Como vai vc? Obrigado professor por esse trabalho genial e aula esclarecedora</Text>
        <View style={styles.leandro}>
          <FontAwesome name="trash-o" size={24} color="black" />
          <FontAwesome name="send" size={24} color="black" />
        </View>
      </View>
      <View style={styles.caixa2}>
        <Text style={styles.diogo}>Oi tudo bom ?Como vai vc? Obrigado professor por esse trabalho genial e aula esclarecedora</Text>
        <View style={styles.leandro}>
          <FontAwesome name="trash-o" size={24} color="black" />
          <FontAwesome name="send" size={24} color="black" />
        </View>
      </View>
      <View style={styles.caixa2}>
        <Text style={styles.diogo}>Oi tudo bom ?Como vai vc? Obrigado professor por esse trabalho genial e aula esclarecedora</Text>
        <View style={styles.leandro}>
          <FontAwesome name="trash-o" size={24} color="black" />
          <FontAwesome name="send" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  caixa: {
    backgroundColor: 'lightgrey',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  titulo: {
    justifyContent: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },

  caixa2: {
    backgroundColor: 'lightgrey',
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    paddingVertical: 10,
    margin: 10,
  },

  leandro: {
    flexDirection: 'row',
  },

  diogo: {
    width: '70%',
  }

});
