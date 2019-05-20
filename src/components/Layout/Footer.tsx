import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import * as types from "../../constants/Types";

interface IProps extends types.BasePropsInterface {}

interface IState {}

class BaseComponent extends React.Component<IProps, IState> {
  public render() {
    return (
      <View>
        <Text>Footer!</Text>
      </View>
    );
  }
}

export const Footer = BaseComponent;
