'use client';

import {useState, useEffect} from 'react';
import {signIn, useSession} from 'next-auth/react';
import {toast} from 'react-hot-toast';
import {useRouter} from 'next/navigation';

export default function Login() {
  const session = useSession();

  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/forms');
    }
  });

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('credentials', {...data, redirect: false}).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success('Logged in successfully!');
      }
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="my-20 text-2xl font-bold"> Sign in to your account</h2>
          <form className="space-y-6" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}
                  required={true}
                  className="input input-bordered input-accent mt-2 w-full max-w-xs"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required={true}
                  value={data.password}
                  onChange={(e) => setData({...data, password: e.target.value})}
                  className="input input-bordered input-accent mt-2 w-full max-w-xs"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-accent btn-outline mb-2 w-full max-w-xs">
                Sign in
              </button>
            </div>
          </form>

          {/* <h1>Sign into Google below</h1>
          <button
            onClick={() => signIn('google')}
            className="w-full rounded-md bg-red-500 py-1.5  text-white">
            Sign In
          </button> */}
        </div>
      </div>
    </>
  );
}
