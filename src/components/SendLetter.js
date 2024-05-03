import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import {useState} from 'react';

function SendLetter() {

  const [what, setWhat] = useState('love');
  const [who, setWho] = useState();

  const people = 6;
  const me = 2;

  return (
    <View>
      <Text>편지 보내기</Text>

      <View>
        <TouchableOpacity style={what==='love' ? styles.letter_select : styles.letter} onPress={() => setWhat('love')}>
          <Text>러브레터</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={what==='hate' ? styles.letter_select : styles.letter} onPress={() => setWhat('hate')}>
          <Text>헤이트레터</Text>
        </TouchableOpacity>
      </View>

      <View>
        {Array.from({length : people}).map((_, key) => (
          <TouchableOpacity key={key} style={me === key ? styles.me : who === key ? styles.who_select : styles.who} onPress={() => setWho(key)}>
            <Text>{String.fromCharCode(key+65)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  letter : {
    width : 100,
    height : 50,
    backgroundColor : 'pink'
  },
  letter_select : {
    width : 100,
    height : 50,
    backgroundColor : 'red'
  },
  me : {
    backgroundColor : 'grey'
  },
  who : {
    backgroundColor : 'pink'
  },
  who_select : {
    backgroundColor : 'red'
  }
})
export default SendLetter;