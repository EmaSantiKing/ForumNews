import { StyleSheet, Text, View } from 'react-native';
export default function PrimerComponente() {
    return(
        <View style={styles.container}>
        <Text>React Native 2023</Text>
        </View>
       
    );
  
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
