import { StyleSheet } from "react-native";

import { useDrawerProgress } from "react-native-drawer-layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface Props {
  children?: JSX.Element;
}

export const DrawerScene = ({ children }: Props) => {
  const progress = useDrawerProgress();
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(progress.value, [0, 1], [0, -5]);
    const translateY = interpolate(progress.value, [0, 1], [0, insets.top]);

    return {
      transform: [
        {
          rotate: `${rotateValue}deg`,
        },
        {
          translateY,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    overflow: "hidden",
  },
});
