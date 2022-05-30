import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CategoryPosts() {
  return(
    <View style={styles.container}>
      <Text>Pagina CategoryPosts</Text>
    </View>
  )
}

export { CategoryPosts };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
