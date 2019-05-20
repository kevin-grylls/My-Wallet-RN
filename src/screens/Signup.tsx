import * as React from "react";
import * as types from "../constants/Types";
import { AppContextInterface, withAppContext } from "../contexts";
import { Layout } from "../components";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeProvider, Button, Input } from "react-native-elements";
import * as API from "../api";
import { Alert } from "react-native";

interface IProps extends types.BasePropsInterface {
  context?: AppContextInterface;
}

interface IState {
  id: string | null;
  password: string | null;
  onRequest: Boolean;
}

class BaseComponent extends React.Component<IProps, IState> {
  state: IState = {
    id: null,
    password: null,
    onRequest: false
  };

  private rollback = () => this.setState({ id: null, password: null });

  private makeAccount = () => {
    const { id, password } = this.state;

    if (id == null) return Alert.alert("Invalid ID");
    if (password == null) return Alert.alert("Invalid Password");

    API.signup(id.toLowerCase(), password)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.rollback();
        Alert.alert("회원가입 성공");
      })
      .catch(err => {
        console.warn(err);
        Alert.alert("회원가입 에러");
      });
  };

  private onChangeId = (text: string) => this.setState({ id: text });
  private onChangePw = (text: string) => this.setState({ password: text });

  public render() {
    return (
      <Layout {...this.props}>
        <ThemeProvider>
          <Input
            value={this.state.id}
            onChangeText={this.onChangeId}
            containerStyle={{ paddingBottom: 10 }}
            placeholder="ID"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
          <Input
            value={this.state.password}
            onChangeText={this.onChangePw}
            containerStyle={{ paddingBottom: 20 }}
            placeholder="Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
          />
          <Button title="Sign Up" onPress={this.makeAccount} />
        </ThemeProvider>
      </Layout>
    );
  }
}

export const Signup = withAppContext(BaseComponent);
