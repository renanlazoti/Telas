import { View } from 'react-native';
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from './components/Footer';
import { styles } from './css/Styles.js';

export default function ScreenMenu({ navigation }){
  return (
    <View style={styles.container}>
      <Header />
      <Content acao={navigation} />
    </View>
  );
}
