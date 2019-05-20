import React from "react";
import { Provider } from "./contexts/AppContext";
import Navigation from "./navigation/navigation";
import { AppLoading } from "./components";

class App extends React.Component {
  state = {
    loaded: false
  };

  loadAssets = async () => {
    this.setState({ loaded: true });
  };

  componentWillMount() {
    this.loadAssets();
  }

  public render() {
    if (!this.state.loaded) {
      return <AppLoading startAsync={null} onFinish={null} />;
    }

    return (
      <Provider>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
