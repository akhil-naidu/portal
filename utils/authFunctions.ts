import { supabase } from '@/utils/supabaseFrontend';

const login = async (email: string, password: string) => {
  try {
    await supabase.auth.signIn({
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  } catch (error) {
    console.log(error);
  }
};

export { login, logout };
