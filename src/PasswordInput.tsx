import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle, TextInput } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { PasswordInputProps } from "../typings/PasswordInputProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function PasswordInput({ attribute }: PasswordInputProps<CustomStyle>): ReactElement {
    return <TextInput
        textContentType="password" // sets the password flag for password managers
        value={attribute.status === "available" ? attribute.displayValue : undefined}
        onChangeText={(text) => attribute.setTextValue(text)}>
    </TextInput>;
}
