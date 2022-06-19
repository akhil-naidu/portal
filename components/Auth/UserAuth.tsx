import { useRouter } from 'next/router';

import { useEffect } from 'react';

import { Center, Loader } from '@mantine/core';

import { supabase } from '@/utils/supabaseFrontend';

const UserAuth = ({ children }: any) => {
  const router = useRouter();

  const session = supabase.auth.session();

  useEffect(() => {
    const authStateChange = async () => {
      try {
        await supabase.auth.onAuthStateChange((event, session) => {
          console.log(event, session);
          if (event == 'SIGNED_OUT') router.push('/');
        });
      } catch (error) {
        console.log(error);
      }
    };

    authStateChange();
  }, [router]);

  if (!session) {
    router.push('/auth');
    return (
      <Center style={{ height: '100vh' }}>
        <Loader />
      </Center>
    );
  }

  return <>{children}</>;
};

export default UserAuth;
