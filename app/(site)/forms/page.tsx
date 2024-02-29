// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {useSession} from 'next-auth/react';
import Link from 'next/link';

import ProgressIndicator from '#/components/ui/ProgressIndicator';
import Button from '#/components/ui/Button';
import Wizard from '#/components/ui/wizard/Wizard';
import WizardButtons from '#/components/ui/wizard/WizardButtons';

import {
  useAddFormMutation,
  useGetFormsQuery,
} from '../../../provider/redux/form/form';
import {FormState} from '../../../types/form';

import PersonalDetails from './wizardComponents/PersonalDetails';
import About from './wizardComponents/About';
import WorkHistory from './wizardComponents/WorkHistory';
import EducationHistory from './wizardComponents/EducationHistory';
import {updateField, addWorkHistoryItem} from './slice';
const Page = () => {
  const dispatch = useDispatch();
  const session = useSession();
  const userId = session?.data?.user?.id;

  const formState = useSelector((state) => state.form);
  const {data, refetch} = useGetFormsQuery(JSON.stringify(userId));
  const [addForm] = useAddFormMutation();
  const [journeyStep, setJourneyStep] = useState(0);
  const [job, setJob] = useState({
    position: '',
    employer: '',
    startDate: '',
    endDate: '',
  });

  const progressIndicatorData = [
    'Personal details',
    'About',
    'Work history',
    'Education',
  ];
  const wizardData = [
    {
      body: () => <PersonalDetails handleChange={handleChange} />,
      footer: () => (
        <WizardButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          journeyStep={journeyStep}
        />
      ),
    },
    {
      body: () => <About handleChange={handleChange} />,
      footer: () => (
        <WizardButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          journeyStep={journeyStep}
        />
      ),
    },
    {
      body: () => (
        <WorkHistory
          setJob={handleItemChange}
          handleAddItem={handleAddItem}
          data={formState}
        />
      ),
      footer: () => (
        <WizardButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          journeyStep={journeyStep}
        />
      ),
    },
    {
      body: () => <EducationHistory handleSubmit={handleSubmit} />,
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

  const handleAddItem = () => {
    dispatch(addWorkHistoryItem(job));
  };

  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob((prevJob) => ({
      ...prevJob,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));
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
    <div className="mt-[110px] grid grid-cols-2 ">
      <div className="flex flex-col">
        <ProgressIndicator
          translations={progressIndicatorData}
          journeyStep={journeyStep}
        />
        <div className="mx-8 mt-3">
          <Wizard
            body={wizardData[journeyStep].body}
            footer={wizardData[journeyStep].footer}
          />
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center">
        {data?.form?.map((el) => (
          <p key={el?.id}>
            <Link key={el?.id} href={`/form/${el?.id}`}>
              <Button>{el?.id}</Button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};
export default Page;
