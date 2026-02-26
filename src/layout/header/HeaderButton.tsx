import { type PropsWithChildren } from "react";

type HeaderButtonProps = {
  onClick: () => void;
};

function HeaderButton({
  children,
  onClick,
}: PropsWithChildren<HeaderButtonProps>) {
  return (
    <button
      onClick={onClick}
      className="pb-1 pt-1.5 font-montserrat text-md lg:text-xl font-bold uppercase cursor-pointer hover:border-black border-b border-white"
    >
      {children}
    </button>
  );
}

export default HeaderButton;
