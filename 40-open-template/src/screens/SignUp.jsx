import { LayoutIllustration } from '../layout'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
    return (
        <LayoutIllustration>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1">Welcome. We exist to make entrepreneurship easier.</h1>
                        </div>

                        <div className="max-w-sm mx-auto">
                            <form>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full px-3">
                                        <button className="px-1 py-2 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                                            <FaGoogle className='text-white ml-4' />
                                            <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                                            <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center my-6">
                                <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                                <div className="text-gray-400">Or, register with your email</div>
                                <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                            </div>
                            <form>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
                                        <input id="full-name" type="text" className="form-input w-full text-gray-300 py-2 px-1 rounded" placeholder="First and last name" required />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Company Name <span className="text-red-600">*</span></label>
                                        <input id="company-name" type="text" className="form-input w-full text-gray-300 py-2 px-1 rounded" placeholder="Your company or app name" required />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
                                        <input id="email" type="email" className="form-input w-full text-gray-300 py-2 px-1 rounded" placeholder="you@yourcompany.com" required />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                                        <input id="password" type="password" className="form-input w-full text-gray-300 py-2 px-1 rounded" placeholder="Password (at least 10 characters)" required />
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500 text-center">
                                    I agree to be contacted by Open PRO about this offer as per the Open PRO <Link to="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
                                </div>
                                <div className="flex flex-wrap -mx-3 mt-6">
                                    <div className="w-full px-3">
                                        <button className="py-2 px-1 rounded text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-gray-400 text-center mt-6">
                                Already using Open PRO? <Link to="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </LayoutIllustration>
    )
}

export default SignUp