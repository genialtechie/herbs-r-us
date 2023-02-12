import Image from 'next/image';

const ReviewCard = ({ image, children, className }) => {
  return (
    <div className={className + ' ' + 'h-fit w-fit mx-5 lg:mx-auto'}>
      <div className="w-full h-fit md:w-[600px] flex flex-row justify-around items-center p-3">
        <Image
          src={image}
          alt="customer"
          width={100}
          height={100}
          className="hidden md:block w-24 h-24 rounded-full object-scale-down"
        />
        <div className="md:w-[450px] w-full h-fit text-white font-serif">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
