import { useState, useRef } from 'react'
import { MdClose } from 'react-icons/md'

const Modal = ({ thumb, thumbWidth, thumbHeight, thumbAlt, video, videoWidth, videoHeight, }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const videoRef = useRef(null)

    return (
        <div>
            <div>
                <div className="relative flex justify-center items-center">
                    <img
                        src={thumb}
                        width={thumbWidth}
                        height={thumbHeight}
                        alt={thumbAlt}
                    />
                    <button
                        className="absolute group"
                        onClick={() => setModalOpen(true)}
                        aria-label="Watch the video"
                    >
                        <svg
                            className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
                            viewBox="0 0 88 88"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient
                                    x1="78.169%"
                                    y1="9.507%"
                                    x2="24.434%"
                                    y2="90.469%"
                                    id="a"
                                >
                                    <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                                    <stop stopColor="#EBF1F5" offset="100%" />
                                </linearGradient>
                            </defs>
                            <circle fill="url(#a)" cx="44" cy="44" r="44" />
                            <path
                                className="fill-current text-purple-600"
                                d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {modalOpen && (
                <div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-75"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="relative max-w-6xl w-full bg-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            ref={videoRef}
                            width={videoWidth}
                            height={videoHeight}
                            loop
                            controls
                            autoPlay
                            className="w-full h-auto aspect-video"
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            className="absolute top-2 right-2 text-white"
                            onClick={() => setModalOpen(false)}
                        >
                            <MdClose className='text-[20px]' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal