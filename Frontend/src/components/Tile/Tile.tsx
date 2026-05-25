import React from "react";

type Props = {
  title: string;
  subTitle: React.ReactNode;
};

const Tile = ({ title, subTitle }: Props) => {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-card bg-surface shadow-card xl:mb-0">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-xs font-bold uppercase text-contentMuted">
                {title}
              </h5>

              <span className="font-bold text-xl">{subTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;