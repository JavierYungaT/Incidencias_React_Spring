import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/AddIncidentes';

const AddIncidentScreen = ({ navigation }) => {
  const [tipoIncidencia, setTipoIncidencia] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState(new Date());
  const [descripcion, setDescripcion] = useState('');
  const [show, setShow] = useState(false);

  const handleRegistro = () => {
    axios.post('http://192.168.18.8:8081/api/v1/incidentes', {
      tipoIncidencia,
      prioridad,
      departamento,
      fechaCreacion: fechaCreacion.toISOString().split('T')[0], // Formato YYYY-MM-DD
      descripcion
    })
      .then(response => {
        alert('Incidencia registrada correctamente.');
        navigation.goBack();
      })
      .catch(error => {
        console.error('Error al registrar la incidencia:', error);
        alert('Hubo un error al registrar la incidencia. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || fechaCreacion;
    setShow(Platform.OS === 'ios');
    setFechaCreacion(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <LinearGradient colors={['#1B3857', '#4093A4']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>CREAR UNA NUEVA INCIDENCIA</Text>

        <View style={styles.row}>
          <View style={styles.cardTitle}>
            <Text style={styles.subtitle}>Tipo de Incidencia:</Text>
          </View>
          <View style={styles.card}>
            <Picker selectedValue={tipoIncidencia} style={styles.picker} onValueChange={(itemValue) => setTipoIncidencia(itemValue)}>
              <Picker.Item label="Seleccionar" value="" />
              <Picker.Item label="Core Financiero" value="Core Financiero" style={styles.pickerItem}/>
              <Picker.Item label="Impresoras - escanner" value="Impresoras - escanner"style={styles.pickerItem} />
              <Picker.Item label="Reportes" value="Reportes"style={styles.pickerItem} />
              <Picker.Item label="Teléfonos" value="Teléfonos" style={styles.pickerItem}/>
              <Picker.Item label="Cajeros Automáticos" value="Cajeros Automáticos" style={styles.pickerItem}/>
              <Picker.Item label="Problemas de Computadoras" value="Problemas de Computadoras" style={styles.pickerItem}/>
              <Picker.Item label="Apertura de Cuentas" value="Apertura de Cuentas" style={styles.pickerItem}/>
              <Picker.Item label="Depósitos" value="Depósitos"style={styles.pickerItem}/>
              <Picker.Item label="Retiros" value="Retiros"style={styles.pickerItem} />
              <Picker.Item label="Créditos" value="Créditos" style={styles.pickerItem}/>
              <Picker.Item label="TD - TC" value="TD - TC"style={styles.pickerItem} />
              <Picker.Item label="Otros" value="Otros" style={styles.pickerItem}/>
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.cardTitle}>
            <Text style={styles.subtitle}>Prioridad:</Text>
          </View>
          <View style={styles.card}>
            <Picker selectedValue={prioridad} style={styles.picker} onValueChange={(itemValue) => setPrioridad(itemValue)}>
              <Picker.Item label="Seleccionar" value="" />
              <Picker.Item label="Alta" value="Alta" style={styles.pickerItem}/>
              <Picker.Item label="Media" value="Media" style={styles.pickerItem}/>
              <Picker.Item label="Baja" value="Baja" style={styles.pickerItem}/>
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.cardTitle}>
            <Text style={styles.subtitle}>Departamento:</Text>
          </View>
          <View style={styles.card}>
            <Picker selectedValue={departamento} style={styles.picker} onValueChange={(itemValue) => setDepartamento(itemValue)}>
              <Picker.Item label="Seleccionar" value="" />
              <Picker.Item label="Sistemas" value="Sistemas" style={styles.pickerItem}/>
              <Picker.Item label="Operaciones" value="Operaciones" style={styles.pickerItem} />
              <Picker.Item label="Negocios" value="Negocios"style={styles.pickerItem} />
              <Picker.Item label="Sercivios Electrónicos" value="Sercivios Electrónicos"style={styles.pickerItem} />
              <Picker.Item label="Cobranzas" value="Cobranzas" style={styles.pickerItem}/>
              <Picker.Item label="Seguridad Informática" value="Seguridad Informática"style={styles.pickerItem} />
              <Picker.Item label="Recursos Humanos" value="Recursos Humanos" style={styles.pickerItem}/>
              <Picker.Item label="Finanzas" value="Finanzas" style={styles.pickerItem}/>
              <Picker.Item label="Otros" value="Otros" style={styles.pickerItem}/>
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            {/* <Text style={styles.subtitle}>Fecha:</Text> */}
            <TouchableOpacity style={styles.button} onPress={showDatepicker}>
              <Text style={styles.buttonTextDate}>Seleccionar Fecha</Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker testID="dateTimePicker"
                value={fechaCreacion}
                mode="date" display="default"
                onChange={onChange}
                
              />
            )}

            <View style={styles.card}>
              <TextInput
                style={styles.input}
                value={fechaCreacion.toISOString().split('T')[0]} // Muestra la fecha en formato YYYY-MM-DD
                placeholder="YYYY-MM-DD"
                editable={false}
              />
            </View>
          </View>
        </View >

        <View style={styles.row}></View>

          
          <View style={styles.card}>
            <Text style={styles.subtitleDes}>Agregar Descripción:</Text>
            <TextInput style={styles.textArea} value={descripcion} onChangeText={setDescripcion} multiline={true} numberOfLines={4} />
          </View>

          <View style={styles.row}></View>

        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>

      </ScrollView>
    </LinearGradient>
  );
};

export default AddIncidentScreen;
