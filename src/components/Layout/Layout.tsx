import * as React from "react";
import * as types from "../../constants/Types";
import { View } from "react-native";
import Header from "./Header";
import { Footer } from "./Footer";

interface IProps extends types.BasePropsInterface {}

export class Layout extends React.Component<IProps> {
  public render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Header navigation={this.props.navigation} />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          {this.props.children}
        </View>
        <Footer />
      </View>
    );
  }
}
