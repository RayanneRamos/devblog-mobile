import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { api } from '../../services/api/api';
import { PostItem } from '../../components/PostItem';
import { styles } from './styles';

function Search() {

  const [ input, setInput ] = useState('');
  const [ posts, setPosts ] = useState([]);
  const [ empty, setEmpty ] = useState(false);

  async function handleSearchPost() {
    if(input === '') {
      alert('Digite algum nome');
      return;
    } 

    const response = await api.get(`api/posts?filters[title][$containsi]=${input}&populate=cover`);
    if(response.data?.data.length === 0) {
      setEmpty(true);
      setPosts([]);
      return;
    }
    setPosts(response.data?.data);
    setEmpty(false);
    setInput('');
    Keyboard.dismiss();
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput 
          placeholder='O que está buscando?' 
          style={styles.input} 
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchPost}>
          <Feather name='search' size={25} color='#000' />
        </TouchableOpacity>
      </View>
      { empty && (
        <View>
          <Text style={styles.emptyText}>Não encontramos nenhum post!</Text>
        </View>
      )}
      <FlatList 
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PostItem data={item} /> }
      />
    </View>
  )
}

export { Search };