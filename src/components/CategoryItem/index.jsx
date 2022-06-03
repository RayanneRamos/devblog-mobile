import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

function CategoryItem({ data, favorite }) {

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('CategoryPosts', { 
      id: data?.id, 
      title: data?.attributes?.name 
    });
  }

  return(
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.9}  
      onPress={handleNavigate}
      onLongPress={favorite}
    >
      <Image 
        style={styles.icon}
        source={{ uri: `http://192.168.0.5:1337${data?.attributes?.icon?.data?.attributes?.url}` }}
      />
      <Text style={styles.name}>{data.attributes.name}</Text>
    </TouchableOpacity>
  );
}

export { CategoryItem };