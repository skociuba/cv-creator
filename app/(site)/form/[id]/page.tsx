// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';
import {useSession} from 'next-auth/react';
import React, {useRef, useState} from 'react';

import Button from '#/./components/ui/Button';

import {createPdf} from '../../../helpers';
import {useGetFormsQuery} from '../../../../provider/redux/form/form';

const User = ({params}) => {
  const session = useSession();
  const userId = session?.data?.user?.id;
  const {data, isLoading} = useGetFormsQuery(JSON.stringify(userId));
  const id = params?.id;

  const [color, setColor] = useState('#00bfa5');

  const selectForm = (formId) =>
    data?.form?.find((form) => form?.id === formId);

  const content = selectForm(id);

  const pdfRef = useRef(null);

  return (
    <div className="mx-auto mt-32 rounded-md bg-white text-center">
      <div className="flex items-center justify-between">
        <div className="flex w-full justify-center">
          <Button onClick={() => createPdf(pdfRef)}>Download PDF</Button>
        </div>
        <div className="mr-5 flex space-x-4">
          <button
            className="btn btn-circle bg-blue-500"
            onClick={() => {
              setColor('#2196f3');
            }}
          />
          <button
            className="btn btn-circle bg-amber-500"
            onClick={() => {
              setColor('#ffc107');
            }}
          />
          <button
            className="btn btn-circle bg-accent"
            onClick={() => {
              setColor('#00bfa5');
            }}
          />
        </div>
      </div>
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
                  {content?.firstName || `-`} {content?.lastName || `-`}
                </h1>
                <p className=" mb-8 py-2"> {content?.jobTitle || `-`}</p>
                <p className="py-2">
                  <strong>Profile</strong>{' '}
                  <p className="mb-5 mr-6 mt-5 flex flex-col flex-wrap text-justify">
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
                    <div key={el?.school} className="my-2 mb-2 py-3">
                      <p className="pb-2">
                        {el?.school} - {el?.degree}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span>{el?.startDate}</span>
                        <span className="ml-3">{el?.endDate}</span>
                      </p>
                    </div>
                  ))}
                </p>
              </div>
              <div
                style={{
                  backgroundColor: `${color}`,
                }}
                className="col-span-1 px-6 py-4 text-left text-sm">
                <ul>
                  <p className="py-3 font-bold">Details</p>
                  <li className="py-2"> {content?.nationality || `-`}</li>
                  <li className="py-2"> {content?.city || `-`}</li>
                  <li className="py-2"> {content?.phone || `-`}</li>
                  <li className="py-2 "> {content?.email || `-`}</li>
                </ul>
                <ul>
                  <p className="mt-5 border-t border-white  py-5 font-bold">
                    Skills
                  </p>
                  {content?.skills?.map((el) => (
                    <li key={el?.skill} className="py-2">
                      {el?.skill}
                    </li>
                  ))}
                </ul>
                <ul>
                  <p className="mt-5 border-t border-white  py-5 font-bold">
                    Languages
                  </p>
                  {content?.languages?.map((el) => (
                    <li key={el?.language} className="py-2">
                      <p className="pb-2">{el?.language}</p>
                      <p className="text-xs text-white">
                        <span>{el?.level}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
