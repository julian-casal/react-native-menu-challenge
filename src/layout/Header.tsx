import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  title: string;
  toggleMenuOpen: () => void;
}

export const Header = ({ title, toggleMenuOpen }: Props) => {
  return (
    <SafeAreaView style={styles.content}>
      <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => toggleMenuOpen()}
      >
        <FontAwesome
          name="bars"
          color="grey"
          backgroundColor="transparent"
          size={20}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "grey",
    marginLeft: 20,
    letterSpacing: 3.5,
  },
  button: {
    marginRight: 30,
  },
});
