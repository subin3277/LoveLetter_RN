import { Text, View, Button } from "react-native";
import { useSelector } from "react-redux";

function Round({navigation}) {

  const res = useSelector(state => state.user)
  return(
    <View>
      <Text>Round</Text>
      <Text>{JSON.stringify(res)}</Text>
      <Button title="시작하기" onPress={() => navigation.navigate('Settings')}/>
    </View>
  )
}

export default Round;