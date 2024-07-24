import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { Box } from "@gluestack-ui/themed";

export enum EStatus {
  CORRECT,
  IN_CORRECT,
  NORMAL,
  DISABLE,
}

export interface TextBoxProps extends TouchableOpacityProps {
  status: EStatus;
  content: string;
  next: boolean;
}

const TextBox = (props: TextBoxProps) => {
  const { status, content, style, ...rest } = props;
  let extraBox = {};
  let extraText = {};

  switch (status) {
    case EStatus.CORRECT:
      extraBox = styles.correctBox;
      extraText = styles.correctText;
      break;
    case EStatus.IN_CORRECT:
      extraBox = styles.in_correctBox;
      extraText = styles.in_correctText;
      break;
    case EStatus.DISABLE:
      extraBox = styles.disableBox;
      extraText = styles.disableText;
      break;
    default:
      extraBox = {};
      extraText = {};
      break;
  }
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      {...rest}
      disabled={props.next}
    >
      <Box w={"$full"} style={[styles.box, extraBox]}>
        <Text style={[styles.text, extraText]}>{content}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
  },
  box: {
    // width: "70%",
    height: 41,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    justifyContent: "center",
  },
  text: {
    color: "#000",
    marginLeft: 10,
  },
  correctBox: {
    backgroundColor: "#3aa34a",
    borderColor: "#3aa34a",
    borderWidth: 1,
  },
  correctText: {
    color: "#FFFFFF",
  },
  in_correctBox: {
    backgroundColor: "#ef4444",
    borderColor: "#ef4444",
    borderWidth: 1,
  },
  in_correctText: {
    color: "#FFFFFF",
  },
  disableBox: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D1D5DB",
    borderWidth: 1,
    opacity: 0.5,
  },
  disableText: {
    color: "#000",
    opacity: 0.5,
  },
});
