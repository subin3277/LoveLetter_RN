import { Text, View, Button } from "react-native";

function Home({navigation}) {
  return(
    <View>
      <Text>Home</Text>
      <Button title="시작하기" onPress={() => navigation.navigate('Settings')}/>
    </View>
  )
}

export default Home;