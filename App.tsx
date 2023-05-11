/**
 * Sample React Native App
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

//TextInput
const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  function Section({children, title}: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>{title}</Text>
        <Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}>{children}</Text>
      </View>
    );
  }

const logo =  require("assets/logo.png");
function App(): JSX.Element {
  const isDarkMode = useColorScheme() 
  
  //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  //logo for header
  //<Image source={require(".\assets\logo.png")} style={styles.headerImage}/>;

  return (
    
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'blue',
        borderWidth: 4,
      }}>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>My Timer</Text> 
        </View>
        <Text style={styles.inputTitle}>להתחברות לאפקלציית טיימר אנא הזינו את מספר הטלפון והמייל שלכם</Text> 
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="הכנס אימייל"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="הקלד מספר טלפון"
        keyboardType="numeric"
      />
      </View>
      <View style={styles.footerContainer}>

      </View>
    </SafeAreaView>
  );
}
const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  //style for TextInput
  input: {
    height: 50,
    width: 0.7 * windowWidth,
    margin: 15,
    borderWidth: 2,
    padding: 12,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: 'coral',
  },
  headerContainer: {
    backgroundColor: 'white',
    height: 0.1 * windowHeigth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerImage: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputTitle: {
    fontSize: 15,
    marginRight: 16,
  },
  footerContainer: {
    backgroundColor: 'red',
    height: 0.1 * windowHeigth,
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

return <App />;
};

export default TextInputExample;