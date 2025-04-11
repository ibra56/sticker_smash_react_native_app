import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type prps = {
  imgSource: ImageSource;
}

export default function ImageViewer({ imgSource }: prps) {
  return (
    <Image
      source={imgSource}
      style={styles.image}
    //   contentFit="contain"
    //   transition={1000}
    />
  );
}
const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });