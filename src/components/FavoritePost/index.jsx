import { Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const { width: WIDTH } = Dimensions.get('window');

function FavoritePost({ data }) {

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Detail', {
      id: data.id,
    });
  }

  return(
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <ImageBackground
        source={{ uri: `http://192.168.0.5:1337${data?.attributes?.cover?.data?.attributes?.url}` }}
        style={styles.cover}
        resizeMode='cover'
        blurRadius={3}
        imageStyle={{ borderRadius: 6, opacity: 0.4 }}
      >
        <Text style={styles.title} numberOfLines={1}>
          {data?.attributes?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export { FavoritePost };