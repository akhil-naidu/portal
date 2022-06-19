// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '@/utils/supabaseFrontend';

const test = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: 'akhil@hasura.io',
    password: 'Iwillh@ck9',
  });

  res.status(200).json({ user, session, error });
};

export default test;
