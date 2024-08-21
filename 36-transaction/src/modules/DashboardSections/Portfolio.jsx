import { AiOutlineInfoCircle, AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col xl:flex-row xl:justify-between">
      <div className="flex flex-col xl:flex-row xl:space-x-16 space-y-4 xl:space-y-0">
       
        <div className="flex flex-col">
           <div className="flex items-center text-gray-600">
              <span className="text-sm">Total Portolio Value</span>
              <AiOutlineInfoCircle className="ml-2 text-gray-500" />
           </div>
          <h2 className="text-2xl font-medium">₹ 112,312.24</h2>
        </div>

        <div className="flex flex-col xl:flex-row xl:space-x-4">
          <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-medium">22.39401000</h2>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-medium">BTC</span>
          </div>
          <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-medium">₹ 1,300.00</h2>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">INR</span>
          </div>
        </div>

        <div className="flex space-x-4 mt-4 xl:mt-0">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"><AiOutlineArrowDown className="mr-2" /> Deposit</button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"><AiOutlineArrowUp className="mr-2" /> Withdraw</button>
        </div>

 
      </div>
    </div>
  )
}

export default Portfolio