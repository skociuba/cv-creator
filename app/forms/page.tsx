// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {useSession} from 'next-auth/react';
import Link from 'next/link';

import Wizard from '../components/ui/wizard/Wizard';
import WizardButtons from '../components/ui/wizard/WizardButtons';
import {
  useAddFormMutation,
  useGetFormsQuery,
} from '../../provider/redux/form/form';
import {FormState} from '../../types/form';

import Basic from './wizardComponents/Basic';
import Second from './wizardComponents/Second';
import Third from './wizardComponents/Third';
import Last from './wizardComponents/Last';
import {updateField} from './slice';
const Page = () => {
  const dispatch = useDispatch();
  const session = useSession();
  const userId = session?.data?.user?.id;

  const formState = useSelector((state) => state.form);
  const {data, refetch} = useGetFormsQuery(JSON.stringify(userId));
  const [addForm] = useAddFormMutation();
  const [journeyStep, setJourneyStep] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    if (journeyStep < wizardData.length - 1) {
      setJourneyStep(journeyStep + 1);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (journeyStep > 0) {
      setJourneyStep(journeyStep - 1);
    }
  };
  const wizardData = [
    {
      body: () => <Basic handleChange={handleChange} />,
      footer: () => (
        <WizardButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          journeyStep={journeyStep}
        />
      ),
    },
    {
      body: () => <Second handleChange={handleChange} />,
      footer: () => (
        <WizardButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          journeyStep={journeyStep}
        />
      ),
    },
    {
      body: () => <Third handleChange={handleChange} />,
      footer: () => (
        <WizardButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          journeyStep={journeyStep}
        />
      ),
    },
    {
      body: () => <Last handleSubmit={handleSubmit} />,
      footer: () => (
        <WizardButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          journeyStep={journeyStep}
          handleSubmit={handleSubmit}
        />
      ),
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const field = e.target.name as keyof FormState;
    const value =
      (e.target as HTMLInputElement | HTMLTextAreaElement).type === 'checkbox'
        ? e.target.checked
        : e.target.value;
    dispatch(updateField({field, value}));
  };

  const handleSubmit = async () => {
    try {
      const response = await addForm({
        ...formState,
        userId: userId,
      });
      console.log(response.data);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-[48px] grid grid-cols-2">
      <div className="mt-14 grid gap-3">
        <ul className="steps">
          <li className={`${journeyStep === 0 ? 'step-accent' : ''} step`}>
            Basic
          </li>
          <li className={`${journeyStep === 1 ? 'step-accent' : ''} step`}>
            About
          </li>
          <li className={`${journeyStep === 2 ? 'step-accent' : ''} step`}>
            Work history
          </li>
          <li className={`${journeyStep === 3 ? 'step-accent' : ''} step`}>
            Education
          </li>
        </ul>

        <div className="ml-32">
          {' '}
          <Wizard
            body={wizardData[journeyStep].body}
            footer={wizardData[journeyStep].footer}
            totalSteps={4}
          />
        </div>
      </div>
      <div className="mt-20">
        {data?.form?.map((el) => (
          <p key={el?.id}>
            <Link key={el?.id} href={`/form/${el?.id}`}>
              {/* prettier-ignore */}
              <button className="btn btn-outline btn-accent mb-2 w-full max-w-xs">
                {' '}
                {el?.id}{' '}
              </button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};
export default Page;
