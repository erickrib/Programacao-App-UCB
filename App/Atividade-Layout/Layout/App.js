import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

export default function App() {
  
  const buttonsListHeader = ["A", "B", "C", "D", "E"]
  const renderViews = [ 1, 2, 3 ]
  const buttonsFooter = ["A", "B", "C", "D"]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonHeaderContainer}>
        {
          buttonsListHeader.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.buttonHeader}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://sujeitoprogramador.com/wp-content/uploads/2019/04/react.png' }}
          style={styles.image}
        />
        <TouchableOpacity style={[styles.button, styles.topLeft]}>
          <Text style={styles.buttonText}>Clique</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.topRight]}>
          <Text style={styles.buttonText}>Clique</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.bottomRight]}>
          <Text style={styles.buttonText}>Clique</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerDesign}>
        <Text style={styles.containerDesignText}>Design</Text>
        <TouchableOpacity style={styles.buttonDesign}>
          <Text style={styles.buttonDesignText}>F</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.layoutContainer}>
        {
          renderViews.map((item, index) => {
            return (
              <View key={index} style={styles.layoutChild}>
                <Text>{item}</Text>
              </View>
            )
          })
        }
      </View>

      <View style={styles.buttonHeaderContainer}>
        {
          buttonsFooter.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.buttonFooter}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',  
    alignItems: 'center',
    marginTop: 20, 
  },
  buttonHeader: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageContainer: {
    width: '90%', 
    height: 320,
    position: 'relative',
    marginTop: 20,
    marginHorizontal: 'auto'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20, 
  },
  button: {
    position: 'absolute', 
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  topLeft: {
    top: 10, 
    left: 10, 
  },
  topRight: {
    top: 10,
    right: 10, 
  },
  bottomRight: {
    bottom: 10, 
    right: 10,
  },
  containerDesign: { 
    marginTop: 20,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDesignText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonDesignText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonDesign: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  layoutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
  },
  layoutChild: {
    padding: 10,
    width: '26%',
    height: 200,
    backgroundColor: 'gray',
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFooter: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
});
