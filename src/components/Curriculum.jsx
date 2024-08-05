import React from "react";

import Accordion from "./Accordion";

const Curriculum = ({ title, content }) => {
  return (
    <div className="container rounded-2xl">
      <div className="flex flex-col w-full overflow-hidden">
        <div className="p-4 bg-purple-500 rounded-lg">
          <Accordion title={title} content={content} />
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
