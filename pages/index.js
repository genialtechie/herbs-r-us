import Image from 'next/image';
import carnival from '../public/carnival.png';
import bouncy from '../public/bouncy.gif';
import event from '../public/event.jpg';
import likes from '../public/likes.gif';
import star from '../public/star.svg';
import Link from 'next/link';
import StylishBtn from '../components/StylishBtn';

export default function Home() {
  return (
    <div className="h-full w-full lg:relative">
      <div className="w-full h-fit">
        <div className="bg-custom-theme text-white w-full">
          <div className="h-fit p-4 container md:w-5/6 mx-auto flex flex-col-reverse md:flex-row md:items-center ">
            <div className="h-fit w-full mb-10 md:mb-0 md:w-1/2 flex flex-col">
              <div>
                <h1 className="tracking-wide text-5xl md:text-5xl font-sans font-bold text-center md:text-left mb-5">
                  <span className="text-red-400">Y</span>
                  <span className="text-blue-500">o</span>
                  <span className="text-red-500">u</span>
                  <span className="text-yellow-500">r</span>
                  <span> </span>
                  <span className="text-green-500">p</span>
                  <span className="text-purple-500">a</span>
                  <span className="text-pink-500">r</span>
                  <span className="text-blue-500">t</span>
                  <span className="text-red-500">i</span>
                  <span className="text-yellow-500">e</span>
                  <span className="text-green-500">s</span>
                  <span> </span>
                  <span className="text-pink-500">a</span>
                  <span className="text-blue-500">r</span>
                  <span className="text-red-500">e</span>
                  <span> </span>
                  <span className="text-green-500">o</span>
                  <span className="text-purple-500">u</span>
                  <span className="text-pink-500">r</span>
                  <span> </span>
                  <span className="text-red-500">b</span>
                  <span className="text-yellow-500">u</span>
                  <span className="text-green-500">s</span>
                  <span className="text-purple-500">i</span>
                  <span className="text-pink-500">n</span>
                  <span className="text-blue-500">e</span>
                  <span className="text-red-500">s</span>
                  <span className="text-yellow-500">s</span>
                </h1>
                <p className="md:text-lg px-2 font-serif text-center md:text-left">
                  We specialize in making you happy by delivering Moon Bounces,
                  Slides, Games, Concessions or Hosting Princess Parties of your
                  choice. We cater to birthday parties, picnics, carnivals,
                  church and school fund raisers.{' '}
                  <span className="md:hidden lg:inline">
                    Our priority is to provide excellent service as well as
                    clean, safe, and fun products to make your event memorable.
                  </span>
                </p>
                <div className="mx-auto flex flex-row md:mx-0 w-fit h-fit">
                  <StylishBtn href="/about">Learn More</StylishBtn>
                  <StylishBtn href="/products">Shop</StylishBtn>
                </div>
              </div>
            </div>
            <div className="h-fit w-full mb-10 md:mb-0 md:w-1/2 md:flex md:flex-col hidden md:items-end">
              <Image
                src={bouncy}
                alt="bounce house"
                height={400}
                width={400}
                className="scale-95"
              />
            </div>
          </div>
        </div>
        <div className="mt-14 p-10 container mx-auto lg:w-4/5 lg:mx-auto flex flex-col lg:items-center lg:flex-row lg:mb-14">
          <div className="h-fit w-full lg:w-1/2">
            <Image
              src={event}
              alt="event"
              height={400}
              width={400}
              className="scale-105 object-cover object-center rounded-xl mx-auto mb-14 lg:mb-0"
            />
          </div>
          <div className="h-fit w-full lg:w-1/2 lg:mb-0">
            <h1 className="text-3xl font-sans font-bold text-center lg:text-left mb-5">
              <span className="relative call-to-action">Sit back</span> and let
              us <span className="text-custom-theme">plan your event</span>
            </h1>
            <p className="text-lg font-serif text-center lg:text-left mb-2">
              Jump Around Inflatables is a family owned and operated business
              located in McDonough, GA. We have been in business since 2005 and
              have been serving the Metro Atlanta area for over 15 years.
            </p>
            <p className="text-lg font-serif text-center lg:text-left mb-2">
              We are a team of professionals who are dedicated to providing you
              with the best service possible. We are committed to making your
              event a success.
            </p>
            <p className="text-lg font-serif text-center lg:text-left mb-2">
              All our products are licensed and insured and we are a member of
              the Georgia Carnival Association.
            </p>
          </div>
        </div>
        <hr className="w-4/5 mx-auto h-1 bg-custom-theme" />
        <div className="lg:mt-2 text-custom-gray p-10 container lg:w-4/5 mx-auto flex flex-col">
          <Image
            src={likes}
            alt="customer reviews"
            height={100}
            width={100}
            className="scale-150 mb-8 lg:my-5 mx-auto"
          />
          <h1 className="text-3xl font-sans font-bold text-center mb-3 lg:mb-8">
            What our customers are saying
          </h1>
          <div className="container lg:w-5/6 mx-auto grid auto-rows-min grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-10">
            <div className="lg:my-14">
              <div className="flex flex-row my-8 w-fit mx-auto lg:mx-0">
                <Image
                  src={star}
                  alt="star"
                  height={20}
                  width={20}
                  className="scale-125 mr-2"
                />
                <Image
                  src={star}
                  alt="star"
                  height={20}
                  width={20}
                  className="scale-125 mr-2"
                />
                <Image
                  src={star}
                  alt="star"
                  height={20}
                  width={20}
                  className="scale-125 mr-2"
                />
                <Image
                  src={star}
                  alt="star"
                  height={20}
                  width={20}
                  className="scale-125 mr-2"
                />
                <Image
                  src={star}
                  alt="star"
                  height={20}
                  width={20}
                  className="scale-125 mr-2"
                />
              </div>
              <h1 className="text-4xl font-bold mb-5 font-sans text-center lg:text-left">
                People love us
              </h1>
              <p className="text-2xl font-bold font-sans text-center lg:text-left mb-5">
                (and we love them too!)
              </p>
              <p className="text-lg font-serif text-center lg:text-left mb-5">
                We believe in providing the best service possible. We are
                committed to making your event a success. All our products are
                safe and clean and we are trusted by many families and
                organizations.
              </p>
            </div>

            <div className="container grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2  gap-4">
              <div className="rounded-lg shadow-lg p-5 flex flex-col justify-center">
                <blockquote className="text-md font-serif text-center">
                  Jump Around Inflatables was a pleasure to work with. They were
                  very professional and punctual.
                </blockquote>
                <p className="text-md font-serif text-center mt-2">
                  - Sharon M. <br />
                  <span className="text-custom-theme">Atlanta, GA</span>
                </p>
              </div>
              <div className="rounded-lg shadow-lg p-5 flex flex-col justify-center">
                <blockquote className="text-md font-serif text-center">
                  Customer service was outstanding. My three year old is already
                  wanting the water slide on her birthday. We will be calling
                  you again!
                </blockquote>
                <p className="text-md font-serif text-center mt-2">
                  - Shane T. <br />
                  <span className="text-custom-theme">Locust Grove, GA</span>
                </p>
              </div>
              <div className="rounded-lg shadow-lg p-5 flex flex-col justify-center">
                <blockquote className="text-md font-serif text-center">
                  We very satisfied with their prompt, friendly and flexible
                  service. They let me know that I matter as a customer.
                </blockquote>
                <p className="text-md font-serif text-center mt-2">
                  - Tanya S. <br />
                  <span className="text-custom-theme">McDonough, GA</span>
                </p>
              </div>
              <div className="rounded-lg shadow-lg p-5 flex flex-col justify-center">
                <blockquote className="text-md font-serif text-center">
                  The kids had a blast and the parents were very pleased. I
                  would definitely recommend them to anyone looking for a bounce
                  house rental.
                </blockquote>
                <p className="text-md font-serif text-center mt-2">
                  - Jennifer B. <br />
                  <span className="text-custom-theme">Stockbridge, GA</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full h-72 hidden lg:block"></div>
      <div className="absolute mx-auto inset-x-0 container h-fit w-4/5 bg-custom-theme px-12 p-5 -bottom-10 z-40 rounded-xl text-white hidden flex-row lg:flex justify-around">
        <div>
          <h1 className="font-bold font-sans text-4xl py-4 ">
            Jump in <span className="text-custom-gray">the party bus!</span>
          </h1>
          <p className="text-lg py-4 font-serif">
            We are not afraid of challenges. On the contrary, we love to
            challenge what we think we already know. Because only then can we
            create the best results for our clients.
          </p>
          <button className="font-serif bg-transparent border border-white rounded-full transition-all duration-200 hover:bg-white hover:text-custom-theme h-fit w-fit px-5 py-2">
            <a href="mailto:jumparoundinfl@yahoo.com">Contact us</a>
          </button>
        </div>
        <div className="h-[250px] w-[500px] relative">
          <Image
            src={carnival}
            alt="illustration of a carnival"
            width={500}
            height={500}
            className="absolute mx-auto inset-x-0 lg:mx-0 lg:inset-x-auto lg:scale-95"
          />
        </div>
      </div>
    </div>
  );
}
