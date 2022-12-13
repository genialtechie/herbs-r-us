import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import happy from '../public/happy-cloud.svg';
import sad from '../public/sad-cloud.svg';

const PaymentStatus = () => {
  const [status, setStatus] = useState('loading');
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setStatus('success');
    }
    if (query.get('canceled')) {
      setStatus('canceled');
    }
  }, []);

  return (
    <div className="container flex flex-col h-fit w-3/4 mx-auto">
      {status === 'success' && (
        <>
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-14"
            role="alert"
          >
            <span
              className="float-right cursor-pointer ml-4 font-extrabold"
              onClick={(e) => {
                e.currentTarget.parentNode.classList.add('hidden');
                setStatus('loading');
                router.push('/');
              }}
            >
              X
            </span>
            <strong className="font-bold mr-2">Payment Success!</strong>
            <span className="block sm:inline">
              {' '}
              Your payment was successful.{' '}
            </span>
          </div>
          <p className="mb-20 text-lg text-center">
            <Image
              src={happy}
              alt="happy"
              width={150}
              height={150}
              className="mx-auto scale-150 mb-16"
            />
            Thank you for your purchase! Your reservation is being made and you
            will receive an email confirmation shortly.
          </p>
        </>
      )}
      {status === 'canceled' && (
        <>
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-14"
            role="alert"
          >
            <span
              className="float-right cursor-pointer ml-4 font-extrabold"
              onClick={(e) => {
                e.currentTarget.parentNode.classList.add('hidden');
                setStatus('loading');
                router.push('/');
              }}
            >
              X
            </span>
            <strong className="font-bold mr-2">Payment Canceled!</strong>
            <span className="block sm:inline">
              Your payment was not successful.{' '}
            </span>
          </div>
          <p className="mb-20 text-lg text-center">
            <Image
              src={sad}
              alt="sad"
              width={150}
              height={150}
              className="mx-auto scale-150 mb-16"
            />
            Sorry, your reservation could not be processed at this time, please
            try again.
          </p>
        </>
      )}
    </div>
  );
};

export default PaymentStatus;
