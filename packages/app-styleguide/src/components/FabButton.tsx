import * as React from "react";

interface FabButtonProps {
    position?: object;
    onClickHandler: () => void
}

export const FabButton: React.FC<FabButtonProps> = ({ onClickHandler , position = {bottom: '10px', right: '10px'}}) => {
  return (
    <button
      className="sg-fixed sg-bg-red-600 hover:sg-bg-red-700 hover:sg-shadow-md sg-text-white sg-font-bold sg-rounded-full sg-h-12 sg-w-12 sg-flex sg-items-center sg-justify-center"
      style={position}
      onClick={onClickHandler}
    >
      <i className="fas fa-comment-alt"></i>
    </button>
  );
};
