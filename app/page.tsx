
export default function Home() {
  return (
    <section id=" main-section" className="max-w-3xl mx-auto mt-40 p-8 dark:bg-white rounded shadow-md">
        <h2 className="text-2xl text-gray-800">Break language barriers with our Multi-lingual Chat App</h2>
        <p className="text-gray-600 mt-4">Connect with people from around the world seamlessly, no matter what language they speak. Our app automatically translates messages, making communication easier than ever.</p>

        <div className="mt-4">
            <p className="text-gray-800 font-semibold">Key Features:</p>
            <ul className="list-disc list-inside text-gray-600">
                <li>Real-time translation</li>
                <li>Support for multiple languages</li>
                <li>User-friendly interface</li>
                <li>Secure and private messaging</li>
            </ul>
        </div>

        <p className="text-gray-600 mt-4">Ready to start chatting across languages? <a href="#download" className="text-blue-500 hover:text-blue-700">Download our app now!</a></p>
    </section>

  )
}
