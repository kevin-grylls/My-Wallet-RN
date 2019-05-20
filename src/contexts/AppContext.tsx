import * as React from "react";
import * as types from "../constants/Types";
import * as utils from "../utils";

export type AppContextInterface = types.BaseContextInterface | null;

const myContext = React.createContext<AppContextInterface>(null);
const AppContextConsumer = myContext.Consumer;
const AppContextProvider = myContext.Provider;

export class Provider extends React.Component<{}, AppContextInterface> {
  state: AppContextInterface = {
    ca: null
  };

  private loadCA = async () => {
    let contractAddress = await utils.getItem("ca");
    if (contractAddress) {
      contractAddress = JSON.parse(contractAddress);
      this.setState({ ca: contractAddress });
    } else {
      this.setState({ ca: contractAddress });
    }
  };

  componentDidMount() {
    this.loadCA();
  }

  public render() {
    return (
      <AppContextProvider value={this.state}>
        {this.props.children}
      </AppContextProvider>
    );
  }
}

export function withAppContext(Component: any) {
  return function ComponentBoundWithAppContext(props: any) {
    return (
      <AppContextConsumer>
        {context => <Component {...props} context={context} />}
      </AppContextConsumer>
    );
  };
}
