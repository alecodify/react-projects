import React from 'react'

const SupportCard = ({ leftComponent, icon: IconComponent, title, text }) => {
  return (
    <div className="flex flex-col xl:flex-row items-start gap-6">
      <div className="max-w-md">
        <div className="flex gap-2 items-center">
          <IconComponent className="text-purple-600 text-3xl mb-2" />
          <h1 className="text-xl font-semibold text-gray-900 mb-2">{title}</h1>
        </div>
        <p className="text-gray-600 text-sm lg:w-[50vw]">{text}</p>
      </div>

      <div className="max-w-lg mx-auto">
        {leftComponent}
      </div>
    </div>
  )
}

export default SupportCard