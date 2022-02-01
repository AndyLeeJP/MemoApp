import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar(){
    return(
        <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarTitle}>Memo App</Text>
          <Text style={styles.appBerRight}>Log Out</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        width: '100%',
        height: 104,
        backgroundColor: '#2DD9FF',
        justifyContent: 'flex-end',
      },

      appBarInner: {
        alignItems: 'center',
      },

      appBerRight: {
        position: 'absolute',
        right: 19,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.8)',
      },

      appBarTitle: {
        margin: 8,
        fontSize: 24,
        lineHeight: 32,
        color: '#ffffff',
        fontWeight: 'bold',
      },
});
