"use client";

type TitlePropsType = {
  title: string;
};

const Title = ({ title }: TitlePropsType) => {
  return (
    <h5 className="text-primaryDark font-lato font-bold text-5xl text-center my-20">
      {title}
    </h5>
  );
};
export default Title;
