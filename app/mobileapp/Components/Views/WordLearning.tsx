import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';

import { Text, StyleSheet, Button, View, TextInput } from 'react-native';

interface Props {
    navigation : any;
}

interface PropsFindTranslation {
    word : string;
    userInput : string;
    setUserInput : Dispatch<SetStateAction<string>>;
};

const FindTranslation = ({word, userInput, setUserInput} : PropsFindTranslation) => {
    return (
        <View>
            <Text>{word}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUserInput}
                value={userInput}
            />
        </View>
    );
}

function WordLearning({ navigation }: Props) {

    let [userInput, setUserInput] = useState('');

    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>World Learning</Text>
            <FindTranslation word={userInput} userInput={userInput} setUserInput={setUserInput} />
        </View>
    )
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default WordLearning;