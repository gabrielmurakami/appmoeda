import React from "react";
import RNPickerSelect from "react-native-picker-select";

export default function Picker(props) {
  const placeholder = {
    label: "Selecione uma moeda",
    value: null,
    color: "#000",
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      onValueChange={(value) => props.onChange(value)}
      items={props.moedas}
      style={{
        inputIOS: {
          fontSize: 20,
          color: "#000",
          padding: 9,
        },
        inputAndroid: {
          fontSize: 20,
          color: "#000",
          padding: 9,
        },
      }}
    />
  );
}
