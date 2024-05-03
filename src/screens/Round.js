import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector } from "react-redux";
import {useState} from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import SendLetter from "../components/SendLetter";

function Round({navigation}) {

  const res = useSelector(state => state.user);
  const [select, setSelect] = useState(0);
  const [data, setData] = useState(res[0]);

  return(
    <View>
      <Text>Round</Text>

      <View style={styles.tab}>
        {res.map((item, key) => (
          <TouchableOpacity style={select === key ? [styles.tab_list, styles.select] : styles.tab_list} onPress={() => {setSelect(key); setData(res[key])}}>
            <Text key={key}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        <Text>남은 편지</Text>
        <Text>러브 레터 : {data.love}</Text>
        <Text>헤이트 레터 : {data.hate}</Text>
      </View>
      
      <SendLetter/>
      <Text>{JSON.stringify(res)}</Text>
      <Button title="시작하기" onPress={() => navigation.navigate('Settings')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  tab : {
    flexDirection : 'row'
  },
  tab_list : {
    width : 100,
    height : 30,
    borderColor : 'black',
    borderWidth : 1,
    textAlign : 'center',
    backgroundColor : 'pink',
  },
  select : {
    backgroundColor : 'red'
  }
})
export default Round;