import Button from './Button'

const Deal = () => {
    return (
        <section className="flex md:flex-row flex-col sm:py-16 py-6">
            <div className="flex-1 flex justify-center items-start flex-col">
                <h2 className="font-semibold xs:text-[48px] text-[40px] text-white sx:leading-[76px] leading-[66px] w-full">Find a better card deal <br className="sm:block hidden" /> in few easysteps.</h2>
                <p className="font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 max-w-[470px]">
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                    aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>

                <Button styles={`mt-10`} />
            </div>

            <div className="flex-1 flex justify-center items-center  md:ml-10 ml-0 md:mt-0 mt-10 relative">
                <img src="/card.png" alt="billing" className="w-[100%] h-[100%]" />
            </div>
        </section>
    )
}

export default Deal