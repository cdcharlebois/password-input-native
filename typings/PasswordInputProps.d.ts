/**
 * This file was generated from PasswordInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface PasswordInputProps<Style> {
    name: string;
    style: Style[];
    attribute: EditableValue<string>;
}

export interface PasswordInputPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    attribute: string;
}
