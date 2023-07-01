import { useState } from 'react';
import { fieldData } from 'data/fieldData';
import { IconMail } from 'styles/icons';
import { useAuth } from 'redux/hooks';
import { formatName } from 'utils';
import { toast } from 'react-toastify';
import { SpinnerLines } from 'components/SpinnerLines/SpinnerLines';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import {
  Form,
  FormField,
  Button,
  FormTitle,
  ShowPassword,
  PasswordField,
} from './LoginForm.styled';

const FORM_TITLE_LOGIN = 'Login to your account';
const FORM_TITLE_SIGNUP = 'Create your account';
const BTN_CAPTION_LOGIN = 'Log In';
const BTN_CAPTION_SIGNUP = 'Sign Up';
const LOGIN_ERR = 'Invalid email or a user with the same email already exists';

export const LoginForm = ({ signup = false }) => {
  const { loginAsync, signupAsync, pendingAction } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const resetForm = e => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const action = signup ? signupAsync : loginAsync;

    const formData = {
      name: formatName(name),
      email: email.trim(),
      password: password.trim(),
    };

    action(formData)
      .then(({ user }) => {
        toast.success(`Welcome, ${user.name}`);
        resetForm();
      })
      .catch(() => toast.error(LOGIN_ERR));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>{signup ? FORM_TITLE_SIGNUP : FORM_TITLE_LOGIN}</FormTitle>

      {signup && (
        <FormField
          name="name"
          placeholder="name"
          autoComplete="off"
          pattern={fieldData.name.pattern}
          title={fieldData.name.title}
          icon={fieldData.name.icon}
          value={name}
          maxLength={35}
          onChange={e => setName(e?.target.value ?? '')}
          required
        />
      )}

      <FormField
        placeholder="email"
        type="email"
        autoComplete="off"
        icon={<IconMail size={18} />}
        value={email}
        onChange={e => setEmail(e?.target.value ?? '')}
        required
      />

      <PasswordField>
        <FormField
          placeholder="password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="off"
          pattern={fieldData.password.pattern}
          icon={fieldData.password.icon}
          title={fieldData.password.title}
          value={password}
          onChange={e => setPassword(e?.target.value ?? '')}
          minLength={7}
          maxLength={20}
          required
        />

        <ShowPassword
        // style={password ? null : { opacity: 0.5, pointerEvents: 'none' }}
        >
          {showPassword ? <IoMdEye size={15} /> : <IoMdEyeOff size={15} />}
          <input type="checkbox" onClick={() => setShowPassword(cur => !cur)} />
          <span>{showPassword ? 'Hide' : 'Show'}</span> password
        </ShowPassword>
      </PasswordField>

      <Button>
        {pendingAction && <SpinnerLines width={20} strokeColor="white" />}
        {!pendingAction && (signup ? BTN_CAPTION_SIGNUP : BTN_CAPTION_LOGIN)}
      </Button>
    </Form>
  );
};
