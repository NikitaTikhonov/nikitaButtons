import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

interface Props {
  text: string;
  onPress: () => void;
}
export const BrickButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.main}>
      <ImageBackground
        source={require("./assets/brick.jpg")}
        style={{
          flex: 1,
          aspectRatio: 2 / 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>{text}</Text>
      </ImageBackground>
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
