import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

function LinkWeb({ link, title, closeModal }) {
  return(
    <>
      <TouchableOpacity onPress={closeModal} style={styles.button}>
        <Feather name='x' size={25} color='#fff' />
        <Text style={styles.name}>{title}</Text>
      </TouchableOpacity>
      <WebView 
        source={{ uri: link }}
      />
    </>
  );
}

export { LinkWeb };

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#232630',
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});