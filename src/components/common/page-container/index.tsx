"use client";

type Props = {
  children?: JSX.Element;
};

const PageContainer = ({ children }: Props) => {
  return <main className="px-20 py-3 bg-secondaryMain ">{children}</main>;
};
export default PageContainer;
