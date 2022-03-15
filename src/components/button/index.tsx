import { tw } from 'twind';
import { useRouter } from 'next/router';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  link?: string;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  const router = useRouter();

  const buttonClicked = () => {
    console.log(`clicked`);
    console.log(rest.link);
    if (rest.link) {
      router.push(rest.link);
    }
  };

  return (
    <button onClick={buttonClicked} type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
