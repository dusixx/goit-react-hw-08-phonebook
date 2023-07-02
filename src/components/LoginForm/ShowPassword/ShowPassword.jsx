import { IconEye, IconEyeOff } from 'styles/icons';
import { Checkbox } from './ShowPassword.styled';

export const ShowPassword = ({ onClick, show }) => (
  <Checkbox>
    {show ? <IconEye size={15} /> : <IconEyeOff size={15} />}
    <input type="checkbox" onClick={onClick} />
    <span>{show ? 'Hide' : 'Show'}</span> password
  </Checkbox>
);
