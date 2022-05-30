import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Detail() {
  return(
    <View style={styles.container}>
      <Text>Pagina Detail</Text>
    </View>
  )
}

export { Detail };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
