import * as React from "react";
import { Text, View } from "react-native";
import { Layout } from "../components";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeProvider, Button, Input } from "react-native-elements";

interface IProps {
  navigation: any;
}

export class Search extends React.Component<IProps> {
  public render() {
    return (
      <Layout {...this.props}>
        <ThemeProvider>
          <Input
            containerStyle={{ paddingBottom: 10 }}
            placeholder="ID"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
          <Input
            containerStyle={{ paddingBottom: 20 }}
            placeholder="Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
          />
          <Button title="Sign Up" />
        </ThemeProvider>
      </Layout>
    );
  }
}
