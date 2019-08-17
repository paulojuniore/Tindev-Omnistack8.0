import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { bold } from 'ansi-colors';

const App = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >Hello world! (:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20
  }
})

export default App;
