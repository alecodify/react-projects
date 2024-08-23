import { FaCheck } from "react-icons/fa";

const Zigzag = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
                        <h1 className="h2 mb-4">One product, unlimited solutions</h1>
                        <p className="text-xl text-gray-400">Achieve your objectives with a solution that adapts to your needs, providing efficiency and effectiveness.</p>
                    </div>

                    <div className="grid gap-20">

                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={"/features-01.png"} width={540} height={405} alt="Features 01" />
                            </div>

                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                                    <p className="text-xl text-gray-400 mb-4">Optimize your project timelines and budgets with our streamlined solutions.</p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Efficient project management</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Cost-effective solutions</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Scalable and adaptable</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={"/features-02.png"} width={540} height={405} alt="Features 02" />
                            </div>

                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                                    <p className="text-xl text-gray-400 mb-4">Ensure your projects stay on track with our efficient tools and strategies.</p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Streamlined processes</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Affordable efficiency</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Flexible and scalable</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={"/features-03.png"} width={540} height={405} alt="Features 03" />
                            </div>

                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                                    <p className="text-xl text-gray-400 mb-4">Achieve more with less by keeping your projects on track and managing your resources efficiently.</p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Achieve faster results with optimized workflows</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Minimize waste and unnecessary expenses</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaCheck className="text-[12px] mr-2 text-green-500 " />
                                            <span>Enhance productivity and streamline processes</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Zigzag