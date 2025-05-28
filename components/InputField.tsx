import { colors } from "@/constants";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  variant?: "filled" | "standard" | "outlined";
  error?: string;
}

const InputField = ({
  label,
  variant = "filled",
  error = "",
  ...props
}: InputFieldProps) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.contianer,
          styles[variant],
          Boolean(error) && styles.inputError,
        ]}
      >
        <TextInput
          placeholderTextColor={colors.GRAY_500}
          style={styles.input}
          {...props}
        />
      </View>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    color: colors.GRAY_700,
    fontSize: 12,
    marginBottom: 5,
  },
  filled: {
    backgroundColor: colors.GRAY_100,
  },
  standard: {},
  outlined: {},
  input: { fontSize: 16, padding: 0, flex: 1 },
  error: { fontSize: 12, marginTop: 5, color: colors.RED_500 },
  inputError: {
    backgroundColor: colors.RED_100,
  },
});

export default InputField;
