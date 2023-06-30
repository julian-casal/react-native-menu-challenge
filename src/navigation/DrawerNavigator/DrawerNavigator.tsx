import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Drawer } from "react-native-drawer-layout";

import { DrawerContent } from "./DrawerContent";
import { DrawerScene } from "./DrawerScene";
import { Header } from "../../layout/Header";

interface Props {
  items: Array<{ label: string; component: () => JSX.Element }>;
}

export const DrawerNavigator = ({ items }: Props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(items[0].label);

  const toggleMenuOpen = () => setOpen(!open);

  const navigateTo = (page: string) => {
    setActive(page);
    setOpen(false);
  };

  const Page = useMemo(
    () => items.find(({ label }) => label === active)?.component,
    [active]
  );

  return (
    <Drawer
      drawerType="back"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      overlayStyle={styles.overlay}
      renderDrawerContent={() => {
        return (
          <DrawerContent
            items={items}
            active={active}
            navigateTo={navigateTo}
          />
        );
      }}
    >
      <DrawerScene>
        <View style={styles.container}>
          <Header title={active} toggleMenuOpen={toggleMenuOpen} />
          {Page?.()}
        </View>
      </DrawerScene>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  overlay: {
    backgroundColor: "transparent",
  },
});
