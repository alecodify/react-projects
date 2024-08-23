import { FaStar, FaRegFileAlt, FaCrosshairs, FaHeadphones, FaKeyboard, FaLightbulb } from 'react-icons/fa'

const Features = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Most of our customers struggle to understand their workflows.</h2>
                        <p className="text-xl text-gray-400">We understand that sometimes it can be challenging to grasp the full scope of your workflows. Our solutions are designed to simplify and clarify these processes for you.</p>
                    </div>


                    <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">

                        <div className="relative  flex flex-col items-center">
                            <div className='w-16 h-16 mb-4 bg-purple-600 flex justify-center items-center rounded-full'><FaStar className='text-white text-[30px]' /></div>
                            <h4 className="h4 mb-2">Instant Features</h4>
                            <p className="text-lg text-gray-400 text-center">Our features are designed to be instantly effective, ensuring that you get immediate results and improvements in your workflow.</p>
                        </div>

                        <div className="relative flex flex-col items-center">
                            <div className='w-16 h-16 mb-4 bg-purple-600 flex justify-center items-center rounded-full'><FaRegFileAlt className='text-white text-[30px]' /></div>
                            <h4 className="h4 mb-2">Instant Features</h4>
                            <p className="text-lg text-gray-400 text-center">Our features are designed for instant application, allowing you to quickly integrate and benefit from them.</p>
                        </div>

                        <div className="relative flex flex-col items-center">
                            <div className='w-16 h-16 mb-4 bg-purple-600 flex justify-center items-center rounded-full'><FaCrosshairs className='text-white text-[30px]' /></div>
                            <h4 className="h4 mb-2">Instant Features</h4>
                            <p className="text-lg text-gray-400 text-center">Experience immediate benefits with features that are tailored for quick implementation and visible results.</p>
                        </div>

                        <div className="relative flex flex-col items-center">
                            <div className='w-16 h-16 mb-4 bg-purple-600 flex justify-center items-center rounded-full'><FaHeadphones className='text-white text-[30px]' /></div>
                            <h4 className="h4 mb-2">Instant Features</h4>
                            <p className="text-lg text-gray-400 text-center">Our features offer instant improvements, helping you to quickly adapt and enhance your workflow.</p>
                        </div>

                        <div className="relative flex flex-col items-center">
                            <div className='w-16 h-16 mb-4 bg-purple-600 flex justify-center items-center rounded-full'><FaKeyboard className='text-white text-[30px]' /></div>
                            <h4 className="h4 mb-2">Instant Features</h4>
                            <p className="text-lg text-gray-400 text-center">Instantly experience the advantages of our features, which are designed to enhance your productivity without delay.</p>
                        </div>

                        <div className="relative flex flex-col items-center">
                            <div className='w-16 h-16 mb-4 bg-purple-600 flex justify-center items-center rounded-full'><FaLightbulb className='text-white text-[30px]' /></div>
                            <h4 className="h4 mb-2">Instant Features</h4>
                            <p className="text-lg text-gray-400 text-center">This text describes a feature that provides immediate benefits or advantages.</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features