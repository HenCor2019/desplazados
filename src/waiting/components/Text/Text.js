import React from 'react';

function Text({ text, position, visibility }) {
  return (
    <div
      className={`px-4 py-6 text-sm text-left flex ${position} ${visibility} lg:pl-0`}
    >
      {text}
    </div>
  );
}

export default Text;
