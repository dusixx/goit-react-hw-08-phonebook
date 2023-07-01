import { forwardRef } from 'react';
import { func, string, number, oneOfType } from 'prop-types';
import { IconClose } from 'styles/icons';

import {
  ClearBtn,
  InputWrapper,
  Input,
  Field,
  IconWrapper,
} from './TextField.styled';

export const TextField = forwardRef(
  (
    { value, icon: ReactIcon, type, onChange, height, width, ...restProps },
    ref /* !! after props */
  ) => {
    return (
      <Field height={height} width={width}>
        <InputWrapper>
          <Input
            ref={ref}
            type={type || 'text'}
            onChange={onChange}
            value={value}
            {...restProps}
          />

          {ReactIcon && (
            <IconWrapper>
              {typeof ReactIcon === 'function' ? (
                <ReactIcon size="100%" />
              ) : (
                ReactIcon
              )}
            </IconWrapper>
          )}

          {value && (
            <ClearBtn type="button" onClick={() => onChange(null)}>
              <IconClose size="100%" />
            </ClearBtn>
          )}
        </InputWrapper>
      </Field>
    );
  }
);

TextField.propTypes = {
  value: string,
  type: string,
  onChange: func,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};
