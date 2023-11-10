import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pricing Card 1 */}
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Basic Plan</h2>
            <p className="text-gray-600 mb-4">Ideal for individuals</p>
            <div className="text-2xl font-bold mb-4">$9.99/month</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Select Plan
            </button>
          </div>

          {/* Pricing Card 2 */}
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Standard Plan</h2>
            <p className="text-gray-600 mb-4">Perfect for small businesses</p>
            <div className="text-2xl font-bold mb-4">$19.99/month</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Select Plan
            </button>
          </div>

          {/* Pricing Card 3 */}
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Premium Plan</h2>
            <p className="text-gray-600 mb-4">Great for larger teams</p>
            <div className="text-2xl font-bold mb-4">$29.99/month</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
