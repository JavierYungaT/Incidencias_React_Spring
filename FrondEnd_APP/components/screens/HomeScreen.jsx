import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

const HomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <LinearGradient colors={['#1B3857', '#4093A4']} style={styles.container}>

      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={require('../images/home2.png')} style={styles.logo} />
          <Text style={styles.title}>INCIDENCIAS</Text>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Ingresar Incidente')}>
            <Icon name="plus-circle" size={20} color="#fff" />
            <Text style={styles.navButtonText}>Ingresar Incidentes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Revisar Incidentes')} >
            <Icon name="eye" size={20} color="#fff" />
            <Text style={styles.navButtonText}>Revisar Incidentes Atendidos</Text>
          </TouchableOpacity>
        </View>
      </View>

    </LinearGradient>
  );
};

export default HomeScreen;
