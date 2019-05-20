import * as React from "react";
import { Picker, Platform } from "react-native";
import LottieView from "lottie-react-native";
import * as types from "../../constants/Types";

interface IProps extends types.BasePropsInterface {
  example: any;
  onChange: Function;
  examples: any;
}

export default class ExamplePicker extends React.Component<IProps> {
  public render() {
    return (
      <Picker
        selectedValue={this.props.example}
        onValueChange={this.props.onChange}
        style={{
          marginBottom: Platform.select({
            ios: -30,
            android: 0
          })
        }}
      >
        {this.props.examples.map((ex: any) => (
          <Picker.Item key={ex.name} label={ex.name} value={ex} />
        ))}
      </Picker>
    );
  }
}
