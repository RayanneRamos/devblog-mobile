import { Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { styles } from './styles';

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