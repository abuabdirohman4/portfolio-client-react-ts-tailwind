type Props = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`${className} -mx-10 mb-16 grid grid-cols-12 md:mx-0`}>
      <section className="col-span-10 col-start-2">{children}</section>
    </div>
  );
};

export default Container;
