import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import QRCode from 'react-qr-code';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generador de QR</Text>
      <View style={styles.qrContainer}>
        <QRCode value="https://campus.ort.edu.ar/grupo/25240/desarrollo-de-aplicaciones-informaticas-5-2025-ni5b-alm/" size={220} />
      </View>
      <Text style={styles.infoText}>Escanea este QR con otro dispositivo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  qrContainer: {
    marginVertical: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 16,
    marginTop: 20,
    color: '#555',
    textAlign: 'center',
  },
});
