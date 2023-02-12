import Link from 'next/link';

const Button = ({ href, className, children, onClick }) => {
  return (
    <Link
      href={href || ''}
      className="inline-block"
    >
      <div
        onClick={onClick}
        className={
          className +
          ' ' +
          'cursor-pointer h-fit w-fit bg-black py-3 px-6 font-semibold font-serif text-white transition-all duration-200 hover:bg-theme ease-in-out'
        }
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
