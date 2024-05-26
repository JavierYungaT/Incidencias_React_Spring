import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    // width: '80%',
    // height: '52%',
    resizeMode: 'cover',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#fff',
  },
  
  
  navButton: {
    backgroundColor: '#1B3857',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,

  },
  navButtonText: {
    color: '#fff',
    textAlign: 'center',
    marginLeft: 20,
    fontSize: 16,
  },

  backgroundImage: {
    width: '80%',
    height: '52%',
    resizeMode: 'cover', // Ajusta el modo de redimensionamiento según tus necesidades
  },
  logoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 250,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden', // Oculta el contenido que se sale de los límites del contenedor
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  cardTitle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});

export default styles;
