import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {

  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text>Pagina Home</Text>
      <Button 
        title='Ir para detalhes'
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
