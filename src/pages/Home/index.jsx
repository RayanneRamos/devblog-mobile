import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { CategoryItem } from '../../components/CategoryItem';
import { FavoritePost } from '../../components/FavoritePost';
import { PostItem } from '../../components/PostItem';
import { styles } from './styles';
import { api } from '../../services/api/api';
import { getFavorite, setFavorite } from '../../services/favorite/favorite';

const FlatListAnimated = Animatable.createAnimatableComponent(FlatList);

function Home() {

  const navigation = useNavigation();
  const [ categories, setCategories ] = useState([]);
  const [ favoriteCategory, setFavoriteCategory ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  
  useEffect(() => {
    async function loadData() {
      await getListPosts();
      const category = await api.get('api/categories?populate=icon');
      setCategories(category.data.data);
    }

    loadData();
  }, []);

  useEffect(() => {
    async function favorite() {
      const response = await getFavorite();
      setFavoriteCategory(response);
    }

    favorite();
  }, []);

  async function getListPosts() {
    setLoading(true);
    const response = await api.get('api/posts?populate=cover&sort=createdAt:desc');
    setPosts(response.data.data);
    setLoading(false);
  }

  async function handleFavorite(id) {
    const response = await setFavorite(id);
    setFavoriteCategory(response);
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text style={styles.name} animation='fadeInLeft'>DevBlog</Animatable.Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Feather name='search' size={24} color='#fff' />
        </TouchableOpacity>
      </View>
      <FlatListAnimated
        animation='flipInX'
        delay={500} 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingRight: 12 }}
        style={styles.categories}
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CategoryItem 
            data={item}
            favorite={() => handleFavorite(item.id)}
          />
        )}
      />
      <View style={styles.main}>
        {
          favoriteCategory.length !== 0 && (
            <FlatListAnimated
              animation='fadeInLeft'
              delay={500}
              style={styles.listCategories}
              contentContainerStyle={{ paddingEnd: 18 }}
              data={favoriteCategory}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <FavoritePost data={item} />}
            />
          )
        }
        <Text style={ [styles.title, { marginTop: favoriteCategory.length > 0 ? 14 : 46 }] }>Conteúdos em alta</Text>      
        <FlatListAnimated
          animation='fadeIn' 
          delay={500}
          style={styles.listHighArticle}
          showsVerticalScrollIndicator={false}
          data={posts}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostItem data={item} />}
          refreshing={loading}
          onRefresh={() => getListPosts()}
        />
      </View>
    </SafeAreaView>
  );
}

export { Home };