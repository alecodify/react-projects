import { GoArrowUpRight } from "react-icons/go";

const GetStarted = () => {
    return (
        <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
            <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
                <div className="flex justify-center items-start flex-row">
                    <p className="font-medium text-[18px] leading-[23.4px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <GoArrowUpRight className="text-white text-[23px]" />
                </div>

                <p className="font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    )
}

export default GetStarted