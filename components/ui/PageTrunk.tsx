import React, { ReactNode } from 'react'

interface ParentComponentProps {
    title:string,
    children: ReactNode;
  }
  
  const PageTrunk: React.FC<ParentComponentProps> = ({ children, title }) => {
  return (
    <div>
    <div className=" min-h-screen flex items-center justify-center text-dark mt-">
    <div className="bg-white p-8 rounded-lg shadow-md">
    <p className="text-3xl  mb-4 text-center text-black font-bold"> {title}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {children}
      </div>
    </div>
    </div>
  </div>
  )
}

export default PageTrunk