import Link from 'next/link';

const Button = ({ href, className, children, onClick }) => {
  return (
<<<<<<< HEAD
    <Link
      href={href || ''}
      className="inline-block"
    >
=======
    <Link href={href || ''}>
>>>>>>> b347d64d1cd055dde899a00076b668ab32fb2350
      <div
        onClick={onClick}
        className={
          className +
          ' ' +
<<<<<<< HEAD
          'cursor-pointer h-fit w-fit bg-black py-3 px-6 font-semibold font-serif text-white transition-all duration-200 hover:bg-theme ease-in-out'
=======
          'h-fit w-fit bg-black py-3 px-6 font-semibold font-serif text-white transition-all duration-200 hover:bg-theme ease-in-out'
>>>>>>> b347d64d1cd055dde899a00076b668ab32fb2350
        }
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
