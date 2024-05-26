import { StyleSheet } from 'react-native';

const ReviewIncidents = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    
  },
  card: {
    flex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    color: '#fff',
    textAlign: 'center',
  },
  picker: {
    color: '#fff',
  },
  textArea: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    color: '#fff',
    textAlignVertical: 'top',
  },
  
  subtitle:{
    fontSize: 12,
  },

  subtitleDes:{
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,

  },

  button: {
    backgroundColor: '#1B3857',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    marginLeft: 110,
    fontSize: 16,
  },
  buttonTextDate: {
    color: '#fff',
    textAlign: 'center',
    marginLeft: 80,
    fontSize: 16,
  },

  pickerItem: {
    color: '#fff', // Color del texto
    fontSize: 16, // Tamaño de la fuente
    backgroundColor: '#1B3857', // Color de fondo con opacidad
    borderRadius: 5, // Borde redondeado
    paddingHorizontal: 10, // Espacio horizontal dentro del elemento
    marginVertical: 5, // Espacio vertical entre elementos
  },
 

  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },

  column: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconLabelContainer: {
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 5,
  },
  
  description: {
    flexWrap: 'wrap',
    maxWidth: '90%', // Puedes ajustar este valor según el diseño
  },
});

export default ReviewIncidents;
