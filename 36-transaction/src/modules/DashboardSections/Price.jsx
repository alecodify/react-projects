import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Price = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-start">

        <div className="flex flex-col">
          <div className="text-gray-600 text-sm">Wallet Balances</div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-medium">22.39401000</h2>
              <div className="flex items-center font-medium text-green-500">
                <BsArrowUpRight className="text-lg" />
                <span className="text-sm font-medium ml-1">22%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex items-center bg-blue-500 text-white px-2 lg:px-4  py-1 lg:py-2 rounded-md hover:bg-blue-600 text-sm sm:text-base"><AiFillPlusCircle className="mr-1 lg:mr-2 text-md lg:text-lg" />  Buy</button>
          <button className="flex items-center bg-red-500 text-white px-2 lg:px-4 py-1 lg:py-2 rounded-md hover:bg-red-600 text-sm sm:text-base"><AiOutlineMinusCircle className="mr-1 lg:mr-2 text-md lg:text-lg" /> Sell</button>
        </div>

      </div>

      <div className="mt-6">
        <div className="flex justify-end mb-2">
          <div className="bg-gray-100 p-1 rounded-lg flex space-x-2">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <button
                key={tab}
                className="text-sm px-2 py-1 rounded-md hover:bg-white focus:bg-white"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative lg:pb-8">
          <img className="w-full" src="/graph.svg" alt="Graph" />
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 py-1">
            {timestamps.map((timestamp) => (
              <span key={timestamp} className="text-sm text-gray-600">
                {timestamp}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Price