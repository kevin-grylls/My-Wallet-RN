import * as React from "react";
import { View, TouchableHighlight, Image } from "react-native";
import * as types from "../../constants/Types";

const Header = (props: types.BasePropsInterface) => (
  <View
    style={{
      height: 70,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    }}
  >
    <TouchableHighlight
      style={{ marginLeft: 10, marginTop: 15 }}
      onPress={() => {
        props.navigation.openDrawer();
      }}
    >
      <Image
        style={{
          width: 32,
          height: 32
        }}
        source={{ uri: "https://png.icons8.com/ios/2x/menu-filled.png" }}
      />
    </TouchableHighlight>
  </View>
);

export default Header;
