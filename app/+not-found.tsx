import {View, Text, StyleSheet} from "react-native";
import {Link, Stack} from "expo-router";
export default function NotFound() {
  return (
    <>
    <Stack.Screen options={{ title: "Not Found" }} />
    <View>
        <Link href="{(tabs).index}" style={styles.button}>
            Go back to Home Screen
        </Link>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
      },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});