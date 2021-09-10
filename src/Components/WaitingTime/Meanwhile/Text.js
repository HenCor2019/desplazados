import React from 'react';

const Text = ({ text, position, visibility }) => (
    <div className={`px-4 py-6 text-sm text-left flex ${position} ${visibility}`}>
        {text}
    </div>
);

export default Text;