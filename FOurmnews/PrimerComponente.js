import { StyleSheet, Text, View } from 'react-native';
export default function PrimerComponente() {
    return(
        <View style={styles.container}>
        <Text></Text>
        </View>
       
    );
  
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
