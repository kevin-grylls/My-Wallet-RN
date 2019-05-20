import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  StackNavigatorConfig
} from "react-navigation";
import * as Screens from "../screens";

const commonOptions: StackNavigatorConfig = {
  headerMode: "screen",
  cardStyle: { backgroundColor: "blue" }
};

const HomeNavigator = createStackNavigator({
  Home: { screen: Screens.Home }
});

const SignupNavigator = createStackNavigator({
  Signup: { screen: Screens.Signup }
});

const DeployNavigator = createStackNavigator({
  Deploy: { screen: Screens.Deploy }
});

const AppNavigator = createDrawerNavigator({
  Home: { screen: HomeNavigator },
  Signup: { screen: SignupNavigator },
  Deploy: { screen: DeployNavigator }
});

export default createAppContainer(AppNavigator);
