import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import styles from "./style/style"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Gameboard />
      <Footer />
    </View>
  );
}

