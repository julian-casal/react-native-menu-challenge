import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { useDrawerProgress } from "react-native-drawer-layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface Props {
  items: Array<{ label: string; component: () => JSX.Element }>;
  active: string;
  navigateTo: (active: string) => void;
}

export const DrawerContent = ({ items, active, navigateTo }: Props) => {
  const progress = useDrawerProgress();
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, insets.top]);

    return {
      transform: [
        {
          translateY,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.menuContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Beka</Text>
        </View>

        <View style={styles.menu}>
          {items.map(({ label }, index) => {
            const style =
              label === active
                ? [styles.menuButton, styles.menuButtonActive]
                : styles.menuButton;

            const textStyle =
              label === active
                ? [styles.menuText, styles.menuTextActive]
                : styles.menuText;

            return (
              <TouchableOpacity
                key={`menu-${index}`}
                style={style}
                onPress={() => navigateTo(label)}
              >
                <Text style={textStyle}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={[styles.menu, styles.signOutButton]}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a172b",
    borderTopLeftRadius: 25,
    width: Dimensions.get("screen").width,
  },
  menuContainer: {
    width: 250,
  },
  logo: {
    width: "100%",
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingHorizontal: 32,
    marginBottom: 30,
  },
  menuButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  menuButtonActive: {
    backgroundColor: "#3f2836",
  },
  menuText: {
    fontSize: 18,
    color: "white",
  },
  menuTextActive: {
    color: "#cf6766",
  },
  signOutButton: {
    borderTopWidth: 1,
    borderTopColor: "#FFF",
    paddingTop: 30,
    paddingLeft: 0,
    marginLeft: 30,
    width: "70%",
  },
});
