import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Container = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-10 col-start-2">{children}</section>
    </div>
  );
};

export default Container;
