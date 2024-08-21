import { Layout, Table } from '../modules';
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <Layout title={"Transaction"}>
      <div className="flex items-center justify-between">
        <button className="flex items-center py-2 text-sm lg:text-base px-2 lg:px-4 text-white bg-blue-500 rounded hover:bg-blue-600">
          <AiOutlineDownload className="mr-2" />
          Export CSV
        </button>
        <div className="relative ">
          <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input type="text" placeholder="Search..." className="pl-10 pr-3 py-2 border rounded-lg w-full md:w-max max-w-xs md:max-w-md" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md mt-6">
        <div className="border-b">
          <div className="flex flex-col md:flex-row md:justify-between pt-4 pb-2 px-4 md:px-6">
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              {tabs.map((tab) => (
                <div key={tab.name} className="flex items-center gap-2 pb-2 md:pb-4 cursor-pointer">
                  <span className="text-gray-700 text-sm md:text-base">{tab.name}</span>
                  <span className="px-2 py-1 text-xs md:text-sm text-gray-600 bg-gray-200 rounded-full">{tab.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6">
          <Table />
        </div>
      </div>

    </Layout>
  )
}

export default Transaction