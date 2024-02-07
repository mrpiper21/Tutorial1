import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

console.log(Platform.OS)
export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white", padding:10, marginTop: 20}}>
       <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Welcome to America</Text>
      </View>
      <View style={{ padding: 10, backgroundColor: 'green' }}>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>Hello world</Text>
        </View>
      </View>
    </SafeAreaView>
   
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  }
});
