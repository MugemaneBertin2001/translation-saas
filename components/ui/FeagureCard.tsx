import React from 'react'
import { Button } from './button'

interface CardProps {
  title: string,
  description: string,
  price: number,
  call:string,
  features:["now"]
}

const FeatureCard: React.FC<CardProps> = ({title,description,call, features})=> {
  return (
    <div className="bg-gray-200 p-6 rounded-lg">
    <h2 className="text-xl font-semibold mb-4 dark:text-black">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-gray-600 mb-4">
    <ul className="list-disc ml-6">
    {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
    </ul>
    </p>
    <Button>
        {call}
    </Button>
    </div>
  )
}

export default FeatureCard