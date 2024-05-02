import { Text, View, Button, TextInput } from "react-native";
import React, {useState, useRef, useEffect} from 'react';
import { useDispatch } from "react-redux";


function Settings({navigation}) {

  const [people, setPeople] = useState(0)
  const dispatch = useDispatch();

  const inputRefs = useRef([])

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, people)
  }, [people])

  function submit() {
    dispatch({type : 'RESET'})
    for (let i = 0 ; i< people; i++) {
      const name = inputRefs.current[i]
      dispatch({type : 'SET_LOCKER', idx : String.fromCharCode(i+65), name});
    } 
  }

  return(
    <View>
      <Text>Settings</Text>

      <Text>인원수</Text>
      <TextInput
        onChangeText={setPeople}
        value={people.toString()}
        keyboardType="numeric"
      />

      <View>
        {Array.from({length : people}).map((_, key) => (
          <View key={key}>
            <Text>{key + 1}</Text>
            <TextInput 
              onChangeText={(text) => {
                inputRefs.current[key] = text;
              }}
            />
          </View>
        ))}
      </View>

      <Button title="시작하기" onPress={() => {submit(); navigation.navigate('Round')}}/>
    </View>
  )
}

export default Settings;