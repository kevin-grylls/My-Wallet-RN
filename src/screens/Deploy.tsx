import * as React from "react";
import { Layout } from "../components";
import * as types from "../constants/Types";
import { withAppContext, AppContextInterface } from "../contexts";
import { ListItem, Button } from "react-native-elements";
import * as API from "../api";
import * as utils from "../utils";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

interface IProps extends types.BasePropsInterface {
  context?: AppContextInterface;
}

interface IState {
  wallet: [];
  coinbase: any;
  unlocked: Boolean;
  mining: Boolean;
  deployed: Boolean;
  contract: any;
  onRequest: Boolean;
}

class BaseComponent extends React.Component<IProps> {
  state: IState = {
    wallet: [],
    coinbase: null,
    unlocked: false,
    mining: false,
    deployed: false,
    contract: null,
    onRequest: false
  };

  private getCoinbase = () => {
    API.getCoinbase()
      .then(response => response.json())
      .then(json => this.setState({ coinbase: json.result }))
      .catch(err => console.warn(err));
  };

  private getAllWallet = () => {
    API.getAccounts()
      .then(response => response.json())
      .then(json => this.setState({ wallet: json }))
      .catch(err => console.warn(err));
  };

  private loadWalletInfo = () => {
    this.getCoinbase();
    this.getAllWallet();
  };

  public render() {
    const {
      wallet,
      coinbase,
      unlocked,
      mining,
      deployed,
      contract,
      onRequest
    } = this.state;

    console.log("Wallet: ", wallet);
    console.log("Coinbase: ", coinbase);

    return (
      <Layout {...this.props}>
        <Button title="조회" onPress={this.loadWalletInfo} />
        {wallet.map((item, idx) => {
          if (coinbase === item.address) {
            <ListItem
              key={utils.getIndex(idx)}
              leftIcon={{ name: "payment" }}
              title={item.private_key}
              subtitle={item.user_id}
              badge={{
                value: 3,
                textStyle: { color: "orange" }
              }}
            />;
          } else {
            <ListItem
              key={utils.getIndex(idx)}
              leftIcon={{ name: "payment" }}
              title={item.private_key}
              subtitle={item.user_id}
            />;
          }
        })}
      </Layout>
    );
  }
}

export const Deploy = withAppContext(BaseComponent);
