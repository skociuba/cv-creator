'use client';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';

export default function Register() {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('/api/register', data)
      .then(() => toast.success('User has been registered!'))
      .catch(() => toast.error('Something went wrong!'));
    router.push('/login');
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="my-20 text-2xl font-bold">Register for an account</h2>
          <form className="space-y-6" onSubmit={registerUser}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required={true}
                  value={data.name}
                  onChange={(e) => setData({...data, name: e.target.value})}
                  className="input input-bordered input-accent mt-2 w-full max-w-xs"
                />
              </div>
            </div>
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
                  required={true}
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}
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
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
