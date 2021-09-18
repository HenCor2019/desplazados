import React from 'react'

const Text = ({ title, description, author }) => (
  <div className="p-6 flex justify-center items-center order-5 py-4">
    <div>
      <p
        className={`px-5 font-sans text-md md:text-xs font-medium text-left flex justify-center items-center lg:hidden`}
      >
        {title}
      </p>
      <p
        className={`px-5 pt-2 font-sans text-sm md:text-xs text-justify flex justify-center items-center lg:hidden`}
      >
        {description}
      </p>
      <p
        className={`px-5 pt-6 font-sans text-sm md:text-xs text-right flex justify-end items-center lg:hidden`}
      >
        {author}
      </p>
    </div>
  </div>
)

export default Text
