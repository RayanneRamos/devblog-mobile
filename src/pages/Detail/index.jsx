import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Share, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather, Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { LinkWeb } from '../../components/LinkWeb';
import { styles } from './styles';
import { api } from '../../services/api/api';

function Detail() {

  const route = useRoute();
  const navigation = useNavigation();
  const [ post, setPost ] = useState({});
  const [ links, setLinks ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ openLink, setOpenLink ] = useState({});

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`api/posts/${route.params?.id}?populate=cover,category,Opcoes`);
      setPost(response.data.data);
      setLinks(response.data?.data?.attributes?.Opcoes);
    }

    getPost();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleShare}>
          <Entypo name='share' size={25} color='#fff' />
        </TouchableOpacity>
      )
    })
  }, []);

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Confere esse post: ${post?.attributes?.title} ${post?.attributes?.description} Vi lá no app devpost!`,
      });

      if(result.action === Share.sharedAction) {
        if(result.activityType) {
          console.log('Activity Type');
        } else {
          console.log('Compartilho com sucesso')
        } 
      } else if(result.action === Share.dismissedAction) {
        console.log('Modal fechado')
      }
    } catch(error) {
      console.log(erro);
    }
  }

  function handleOpenLink(link) {
   setModalVisible(true);
   setOpenLink(link);
  }

  return(
    <SafeAreaView style={styles.container}>
      <Image 
        resizeMode='cover'
        style={styles.cover}
        source={{ uri: `http://192.168.0.5:1337${post?.attributes?.cover?.data?.attributes?.url}` }}
      />
      <Animatable.Text 
        style={styles.title} 
        animation='slideInLeft' 
        delay={100}
      >
        {post?.attributes?.title}
      </Animatable.Text>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>{post?.attributes?.description}</Text>
        {
          links.length > 0 && (
            <Text style={styles.subtitle}>Links</Text>
          )
        }
        { 
          links.map(link => (
            <TouchableOpacity 
              key={link.id} 
              style={styles.linkButton} 
              onPress={() => handleOpenLink(link)}
            >
              <Feather name='link' color='#1e4687' size={14} />
              <Text style={styles.linkText}>{link.name}</Text>
            </TouchableOpacity>
          )) 
        }
      </ScrollView>
      <Modal animationType='slide' visible={modalVisible} transparent={true}>
        <LinkWeb 
          link={openLink?.url}
          title={openLink?.name}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
      
    </SafeAreaView>
  );
}

export { Detail };