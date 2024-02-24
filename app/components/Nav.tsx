'use client';
import Link from 'next/link';
import {useRouter, usePathname} from 'next/navigation';
import {useSession, signOut} from 'next-auth/react';
import React, {useEffect} from 'react';

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();
  useEffect(() => {
    if (session?.status === 'unauthenticated') {
      router.push('/');
    }
  }, [router, session?.status]);

  return (
    <nav
      style={{
        backgroundColor: `${pathname === '/' ? `transparent` : `white`}`,
        borderBottom: `${pathname === '/' ? `none` : `1px solid #3ffdfe`}`,
        color: `${pathname === '/' ? `white` : `black`}`,
      }}
      className="fixed left-0 top-0 z-10 w-full">
      <div className="flex items-center justify-between p-4">
        <ul className="flex-column flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>

          {session?.status === 'authenticated' ? (
            <>
              <li className="p-4">
                <Link href="/forms">CV Creator</Link>
              </li>
              <button onClick={() => signOut()}>Sign Out</button>
            </>
          ) : (
            <>
              <li className="p-4">
                <Link href="/login">Login</Link>
              </li>
              <li className="p-4">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
        <div className="flex-end flex p-4">
          {session?.data?.user ? `Hi ${session?.data?.user?.name}` : null}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
