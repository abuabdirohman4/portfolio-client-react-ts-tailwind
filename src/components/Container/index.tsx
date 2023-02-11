import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-2 grid grid-cols-12 md:mx-0">
      <section className="col-span-10 col-start-2">{children}</section>
    </div>
  );
};

export default Container;
