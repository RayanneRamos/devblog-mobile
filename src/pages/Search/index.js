import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Search() {
  return(
    <View style={styles.container}>
      <Text>Pagina Search</Text>
    </View>
  )
}

export { Search };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
