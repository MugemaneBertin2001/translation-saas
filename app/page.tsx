import BannerComponent from '@/components/BannerComponent'
import React from 'react'

function page() {
  return (
    <main>
      {/* banner */}
      <BannerComponent />

    {/* <!-- Features Section --> */}
    <section className="py-16">
        <div className="container mx-auto flex flex-wrap">
            {/* <!-- Feature 1 --> */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <h2 className="font-bold mb-4">Multilingual Support</h2>
                <p>Supports a wide range of languages, allowing users to communicate seamlessly.</p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <h2 className="text-2xl font-bold mb-4">User-Friendly Interface</h2>
                <p>An intuitive and easy-to-use interface for a smooth chatting experience.</p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <h2 className="text-2xl font-bold mb-4">Secure and Private</h2>
                <p>Your conversations are encrypted and secure to ensure privacy.</p>
            </div>

            {/* <!-- Add more features as needed --> */}
        </div>
    </section>

    {/* <!-- Call-to-Action Section --> */}
    <section className="bg-gray-100-500 text-black py-16">
        <div className="container mx-auto text-center">
            <p className="text-3xl md:text-5xl font-bold mb-4">Start Chatting Today!</p>
            
        </div>
    </section>
    </main>
  )
}

export default page