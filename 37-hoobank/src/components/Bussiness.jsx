import { features } from '../contants';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => {
    const Icon = icon;
    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
                <Icon className="text-[50px] text-secondary" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">{title}</h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{content}</p>
            </div>
        </div>
    )
};

const Bussiness = () => {
    return (
        <section id='features' className='sm:py-16 py-6'>
            <div className='flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
                <h2 className='font-semibold md:text-center xs:text-[48px] text-[40px] text-white sx:leading-[76px] leading-[66px] w-full' > You do the business, <br className="sm:block hidden" /> we’ll handlethe money.</h2>
                <p className='font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 max-w-[470px]'>With the right credit card, you can improve your financial life by
                    building credit, earning rewards and saving money. But with hundreds
                    of credit cards on the market.</p>
                <Button style={"mt-10"} />
            </div>

            <div className='flex md:flex-row sm:py-16 py-6 flex-col'>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Bussiness