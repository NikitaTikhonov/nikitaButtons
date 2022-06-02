import { TouchableOpacity, Text, StyleSheet } from "react-native";


interface Props {
    text: string;
    onPress: () => void;
  }
  export const RedButton = ({ text, onPress }: Props) => {
    return (
      <TouchableOpacity onPress={onPress} style={style.main}>
        <Text style={style.text}>{text}</Text>
      </TouchableOpacity>
    );
  };
  
  const style = StyleSheet.create({
    main: {
      width: 100,
      height: 100,
      backgroundColor: "red",
    },
    text: {
      fontSize: 24,
      color: "white",
      letterSpacing: 1.1,
    },
  });
  