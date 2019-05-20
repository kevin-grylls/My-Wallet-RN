import * as React from "react";
import { AppContextInterface, withAppContext } from "../contexts";
import { BasePropsInterface } from "../constants/Types";
import { colors, TEXT } from "../config";
import { View, StyleSheet } from "react-native";
import { Layout } from "../components";
import { Icon, Text, ListItem } from "react-native-elements";

const EthereumIcon =
  "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png";

const MENUS = [
  {
    name: "Wallet",
    subtitle: "Create New Account",
    linearGradientColors: ["#FF9800", "#F44336"]
  },
  {
    name: "Mine",
    subtitle: "Enable / Disable Mining",
    linearGradientColors: ["#FF9800", "#F44336"]
  },
  {
    name: "Deploy",
    subtitle: "Deploay Smart Contract",
    linearGradientColors: ["#FF9800", "#F44336"]
  },
  {
    name: "Transaction",
    subtitle: "Execute Transaction",
    linearGradientColors: ["#FF9800", "#F44336"]
  },
  {
    name: "History",
    subtitle: "Trace Transaction",
    linearGradientColors: ["#FF9800", "#F44336"]
  }
];

const log = () => console.log("this is an example method");

interface IProps extends BasePropsInterface {
  context?: AppContextInterface;
}

class BaseComponent extends React.Component<IProps> {
  public render() {
    return (
      <Layout {...this.props}>
        <View
          style={[
            styles.headerContainer,
            { backgroundColor: "#20639B", marginTop: 20 }
          ]}
        >
          <Icon color="white" name="magic" size={62} type="font-awesome" />
          <Text style={styles.heading}>{TEXT.t("FEATURES")}</Text>
        </View>
        <View style={{ backgroundColor: "#ECEFF1", paddingVertical: 8 }}>
          {MENUS.map((l, i) => (
            <ListItem
              // leftAvatar={{ title: l.name[0], source: { uri: EthereumIcon } }}
              leftIcon={{ name: "folder-o", type: "font-awesome" }}
              key={i}
              onPress={log}
              title={l.name}
              subtitle={l.subtitle}
              chevron
              bottomDivider
            />
          ))}
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: "#fff"
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#FD6B78"
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22
  },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: "row",
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  social: {
    flexDirection: "row",
    justifyContent: "center"
  },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey"
  }
});

export const Home = withAppContext(BaseComponent);
