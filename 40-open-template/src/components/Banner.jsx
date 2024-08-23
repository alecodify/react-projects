import { useState } from 'react';
import { MdClose } from 'react-icons/md';

const Banner = () => {
    const [bannerOpen, setBannerOpen] = useState(true);

    return (
        <div>
            {bannerOpen && (
                <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
                    <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
                        <div className="text-slate-500 inline-flex">
                            <a
                                className="font-medium hover:underline text-slate-50"
                                href="https://github.com/whyyali/React-Projects/tree/main/40-open-template"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download<span className="hidden sm:inline"> on GitHub</span>
                            </a>{' '}
                            <span className="italic px-1.5">or</span>{' '}
                            <a className="font-medium hover:underline text-emerald-400" href="" target="_blank" rel="noreferrer">
                                Check Premium Version
                            </a>
                        </div>
                        <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
                            <MdClose className='text-white' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Banner