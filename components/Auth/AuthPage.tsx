import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Loader,
  PasswordInput,
  Progress,
  SimpleGrid,
  Skeleton,
  TextInput,
} from '@mantine/core';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { login } from '@/utils/authFunctions';
import { supabase } from '@/utils/supabaseFrontend';

import { getPasswordStrength } from './getPasswordStrength';

const AuthPage = () => {
  const session = supabase.auth.session();
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().email('Invalid email address').required('email cannot be empty'),
    password: yup
      .string()
      .matches(/[0-9]/, 'Password Should include a number')
      .matches(/[a-z]/, 'Password Should include a small caps letter')
      .matches(/[A-Z]/, 'Password Should include a long caps')
      .matches(/[$&+,:;=?@#|'<>.^*()%!-]/, 'Password Should include a special character')
      .min(6, 'Password length should be a minimum of 6')
      .required('password cannot be empty'),
  });

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const strength = getPasswordStrength(loginForm.values.password);

  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: '0ms' } }}
        value={
          loginForm.values.password.length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / 4) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));

  if (session) {
    router.push('/');
    return (
      <Center style={{ height: '100vh' }}>
        <Loader />
      </Center>
    );
  }

  return (
    <Container size='xl'>
      <SimpleGrid cols={2} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Center sx={{ width: '100%', height: '100vh' }}>
          <Box sx={{ width: 300 }}>
            <form onSubmit={loginForm.handleSubmit}>
              <TextInput
                required
                label='Email'
                placeholder='your@email.com'
                {...loginForm.getFieldProps('email')}
                error={loginForm.touched?.email && loginForm.errors?.email}
              />

              <PasswordInput
                placeholder='Your password'
                label='Password'
                required
                {...loginForm.getFieldProps('password')}
                error={loginForm.touched?.password && loginForm.errors?.password}
              />

              <Group spacing={5} grow mt='xs' mb='md'>
                {bars}
              </Group>

              <Group position='right' mt='md'>
                <Button type='submit'>Login</Button>
              </Group>
            </form>
          </Box>
        </Center>
        <Skeleton height='100vh' radius='md' />
      </SimpleGrid>
    </Container>
  );
};

export default AuthPage;
