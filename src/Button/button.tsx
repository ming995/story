import React from "react";

import { ButtonProps } from './button.types';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof Group;
  __ANT_BUTTON: boolean;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const {
        children
    } = props;
} 

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;

export default Button