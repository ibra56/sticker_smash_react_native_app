import { useState } from "react";
import { StyleSheet, FlatList, Platform, Pressable } from "react-native";
import {Image, type ImageSource} from "expo-image";

type Props = {
    onSelect: (imge: ImageSource) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [selectedImage, setSelectedImage] = useState<ImageSource | null>(null);
    const emojis = [
        require("@/assets/sticker-smash-assets/images/emoji1.png"),
        require("@/assets/sticker-smash-assets/images/emoji2.png"),
        require("@/assets/sticker-smash-assets/images/emoji3.png"),
        require("@/assets/sticker-smash-assets/images/emoji4.png"),
        require("@/assets/sticker-smash-assets/images/emoji5.png"),
        require("@/assets/sticker-smash-assets/images/emoji6.png"),
    ];
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emojis}
            contentContainerStyle ={styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        setSelectedImage(item);
                        onSelect(item);
                        onCloseModal();
                    }}
                >
                    <Image source={item} style={styles.image} key={index} />
                </Pressable>
            )}
           
        />
    );
}
const styles = StyleSheet.create({
    listContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 20,
    },
  });