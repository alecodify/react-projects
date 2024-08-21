
const Contact = () => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-xl max-w-lg mx-auto">
      <div className="mb-6 text-sm font-medium text-gray-700">
        You will receive a response within 24 hours of submission.
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700"> Name </label>
            <input type="text" placeholder="Enter Your Name.." className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"> Surname </label>
            <input type="text" placeholder="Enter Your Surname.." className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700"> Email </label>
          <input type="email" placeholder="Enter Your Email.." className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700"> Message </label>
          <textarea placeholder="Enter Your Message.." className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" rows="4" ></textarea>
        </div>

        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-purple-600 border-gray-300 rounded" defaultChecked />
          <label className="ml-2 text-sm text-gray-700">
            I agree with{" "}
            <a href="#" className="text-purple-500 hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        <div className="flex space-x-4">
          <button className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md shadow hover:bg-purple-700"> Send a Message </button>
          <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-md shadow hover:bg-gray-300"> Book a Meeting </button>
        </div>
      </div>
    </div>
    )
}

export default Contact