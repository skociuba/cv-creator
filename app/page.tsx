// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {getServerSession} from 'next-auth';

import {authOptions} from './../lib/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <section className="flex flex-col items-center justify-center">
      <pre>{JSON.stringify(session)}</pre>
    </section>
  );
}
