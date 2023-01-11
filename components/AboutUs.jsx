import React from 'react';
import safety from '../public/safety.svg';
import customers from '../public/customers.svg';
import fun from '../public/fun.svg';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold font-sans text-center mt-10 text-custom-theme">
        About Us
      </h1>
      <div className="container lg:w-4/5 mx-auto flex flex-col">
        <p className="text-md w-full text-slate-500 font-serif italic text-center my-5">
          We are fully licensed and insured
        </p>
        <div className="container p-10 lg:w-3/4 w-full mx-auto">
          <p className="font-serif text-xl leading-normal">
            Jump Around Inflatables is an event rental company that provides
            bounce houses, water slides, obstacle courses, and more for events
            in the Atlanta area. We are a family owned and operated business
            located in McDonough, GA. We have been in business since 2005 and
            have been crafting memorable events for over 15 years.
          </p>
          <h1 className="text-3xl font-serif font-bold text-center lg:text-left my-7 text-blue-700">
            Our Approach
          </h1>
          <h1 className="text-2xl font-serif font-bold mb-4">
            We know how important your event is to you{' '}
            <br className="lg:block hidden" />
            and we are committed to making it a success.
          </h1>
          <p className="font-serif text-xl leading-normal">
            We listen to your needs and work with you to create a memorable
            event. We are a team of professionals who are dedicated to providing
            you with the best service possible.
          </p>
          <div className="grid grid-auto-rows lg:grid-cols-3 lg:grid-rows-1 gap-10 my-20">
            <div className="text-center lg:text-left">
              <Image
                src={safety}
                alt="safety"
                height={60}
                width={60}
                className="scale-125 mx-auto lg:mx-0 mb-4"
              />
              <h1 className="text-2xl font-serif font-bold mb-2 text-blue-700">
                Safety
              </h1>
              <p className="text-lg">
                We pride ourselves on the safety and cleanliness of our
                equipment, and all of our inflatables are regularly inspected
                and maintained to ensure they meet the highest standards.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <Image
                src={fun}
                alt="fun"
                height={60}
                width={60}
                className="scale-125 mx-auto lg:mx-0 mb-4"
              />
              <h1 className="text-2xl font-serif font-bold mb-2 text-blue-700">
                Entertainment
              </h1>
              <p className="text-lg">
                Our extensive selection of inflatable bounce houses, obstacle
                courses, water slides, and other interactive games and
                activities are sure to impress and entertain interactive games
                and activities are sure to impress and entertain guests of all
                ages.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <Image
                src={customers}
                alt="customers"
                height={60}
                width={60}
                className="scale-125 mx-auto lg:mx-0 mb-4"
              />
              <h1 className="text-2xl font-serif font-bold mb-2 text-blue-700">
                Service
              </h1>
              <p className="text-lg">
                We strive to provide a fun, safe, and memorable experience for
                all of our customers, and we are always looking for ways to
                improve and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
