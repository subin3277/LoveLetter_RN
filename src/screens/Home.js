import { Text, View, Button } from "react-native";
import SendLetter from "../components/SendLetter";

function Home({navigation}) {
  return(
    <View>
      <Text>Home</Text>
      <SendLetter/>
      <Button title="시작하기" onPress={() => navigation.navigate('Settings')}/>
    </View>
  )
}

export default Home;