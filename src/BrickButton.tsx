import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";

interface Props {
  text: string;
  onPress: () => void;
  brickImage?: ImageSourcePropType;
}
export const BrickButton = ({ text, onPress, brickImage }: Props) => {
  const brick = brickImage ?? { uri: "https://i.ibb.co/DKGFttj/brick.jpg" };
  return (
    <TouchableOpacity onPress={onPress} style={style.main}>
      <ImageBackground
        source={brick}
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
