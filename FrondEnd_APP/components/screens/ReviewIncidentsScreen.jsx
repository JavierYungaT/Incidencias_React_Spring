import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/ReviewIncidents.js';

const ReviewIncidentsScreen = () => {
  const [incidentes, setIncidentes] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.18.8:8081/api/v1/incidentes?estado=SOLUCIONADO')
      .then(response => {
        setIncidentes(response.data);
      })
      .catch(error => {
        alert('Error al cargar los incidentes');
      });
  }, []);

  const contadorSolucionados = incidentes.filter(item => item.estado === 'SOLUCIONADO').length;

  const incidentesSolucionados = incidentes.filter(item => item.estado === 'SOLUCIONADO');

  return (
    <LinearGradient colors={['#1B3857', '#4093A4']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>INCIDENCIAS SOLUCIONADAS</Text>

        <View style={styles.row}>
          <View style={styles.cardTitle}>
            <Text style={styles.subtitle}>Total:</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.input}>{contadorSolucionados}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Detalles" editable={false} />
        </View>
        
        <FlatList
          data={incidentesSolucionados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>

              <View style={styles.column}>
                <Text style={styles.label}>Estado:</Text>
              </View>
              <View style={styles.column}>
                <Text style={[styles.value, { flexWrap: 'wrap' }]}>{item.estado}</Text>
              </View>

              
              <View style={styles.column}>
                <Text style={styles.label}>Incidencia de tipo:</Text>
              </View>
              <View style={styles.column}>
                <Text style={[styles.value, { flexWrap: 'wrap' }]}>{item.tipoIncidencia}</Text>
              </View>


              <View style={styles.column}>
                <Text style={styles.label}>Descripción:</Text>
                {/* <Text style={[styles.value, styles.description]}>{item.descripcion}</Text> */}
              </View>
              <View style={styles.column}>
                {/* <Text style={[styles.value, styles.description]}>{item.descripcion}</Text> */}
                <Text style={[styles.value, styles.description]} numberOfLines={1}>{item.descripcion}</Text>
              </View>


              <View style={styles.column}>
                <Text style={styles.label}>Observación:</Text>
              </View>
              <View style={styles.column}>
                <Text style={[styles.value, { flexWrap: 'wrap' }]}>{item.observacion}</Text>
              </View>


              <View style={styles.column}>
                <Text style={styles.label}>Fecha Resuelto:</Text>
              </View>
              <View style={styles.column}>
                <Text style={[styles.value, { flexWrap: 'wrap' }]}>{item.fechaFin}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default ReviewIncidentsScreen;
