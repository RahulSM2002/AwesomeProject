import { StyleSheet, TextInput } from "react-native";


export const CommonInput = ({ text='', value='', onChange, color='black' }) => {
  return (
    <TextInput
      placeholder={text}
      placeholderTextColor={color}
      style={[styles.input, { paddingLeft: 20 }]}
      onChangeText={onChange}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#3ab4ba',
    height: 50,
    width: '80%',
    borderRadius: 50,
    justifyContent: 'center',
    marginVertical: 10
  },
});
