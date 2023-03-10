import { useRouter } from 'next/router';

const Button = ({ href, className, children, onClick }) => {
  const router = useRouter();

  function handleClick() {
    href ? router.push(href) : onClick();
  }
  return (
      <div
        onClick={handleClick}
        className={
          className +
          ' ' +
          'cursor-pointer h-fit w-fit bg-black py-3 px-6 font-semibold font-serif text-white transition-all duration-200 hover:bg-theme ease-in-out'
        }
      >
        {children}
      </div>
  );
};

export default Button;
