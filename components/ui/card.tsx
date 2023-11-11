import React from 'react'
import { Button } from './button'

interface CardProps {
  plan: string,
  description: string,
  price: number
}

const Card: React.FC<CardProps> = ({plan,description,price})=> {
  return (
    <div className="bg-gray-200 p-6 rounded-lg w-75">
    <h2 className="text-xl font-semibold mb-4 dark:text-black">{plan}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="text-2xl font-bold mb-4 dark:text-black">${price}/Month</div>
    <Button>
         Select Plan
    </Button>
    </div>
  )
}

export default Card