// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';
import {useSession} from 'next-auth/react';
import React, {useRef} from 'react';

import Button from '#/./components/ui/Button';

import {createPdf} from '../../../helpers';
import {useGetFormsQuery} from '../../../../provider/redux/form/form';

const User = ({params}) => {
  const session = useSession();
  const userId = session?.data?.user?.id;
  const {data, isLoading} = useGetFormsQuery(JSON.stringify(userId));
  const id = params?.id;
  const selectForm = (formId) =>
    data?.form?.find((form) => form?.id === formId);

  const content = selectForm(id);

  const pdfRef = useRef(null);

  return (
    <div className="mx-auto mt-32 rounded-md bg-white text-center">
      <Button onClick={() => createPdf(pdfRef)}>Download PDF</Button>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="mt-4 flex min-h-screen items-center justify-center">
          <div
            ref={pdfRef}
            className="mx-auto block h-a4 w-a4  rounded-lg border shadow-2xl">
            <div className="grid h-full grid-cols-3">
              <div className="col-span-2 pl-6 text-left">
                <h1 className="py-4 text-3xl font-bold">
                  {' '}
                  {content?.firstName || `-`} {content?.lastName || `-`}
                </h1>
                <p className=" mb-8 py-2"> {content?.jobTitle || `-`}</p>

                <p className="py-2">
                  <strong>Profile</strong>{' '}
                  <p className="mr-6 mt-5 flex flex-col flex-wrap text-justify">
                    {' '}
                    {content?.about || `-`}
                  </p>
                </p>
                <p className="py-5">
                  <strong>Employment history</strong>
                  {content?.workHistory?.map((el) => (
                    <div key={el?.employer} className="my-2 mb-2 py-3">
                      <p className="pb-2">
                        {el?.position} - {el?.employer}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span>{el?.startDate}</span>
                        <span className="ml-3">{el?.endDate}</span>
                      </p>
                    </div>
                  ))}
                </p>
                <p className="py-5">
                  <strong>Education history</strong>
                  {content?.educationHistory?.map((el) => (
                    <div key={el?.employer} className="my-2 mb-2 py-3">
                      <p className="pb-2">
                        {el?.position} - {el?.employer}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span>{el?.startDate}</span>
                        <span className="ml-3">{el?.endDate}</span>
                      </p>
                    </div>
                  ))}
                </p>
              </div>
              <div className="col-span-1  bg-accent py-4 pl-6 text-left text-sm">
                <ul>
                  <p className="py-3 font-bold">Details</p>
                  <li className="py-2"> {content?.nationality || `-`}</li>
                  <li className="py-2"> {content?.city || `-`}</li>
                  <li className="py-2"> {content?.phone || `-`}</li>
                  <li className="py-2 "> {content?.email || `-`}</li>
                </ul>{' '}
              </div>{' '}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
