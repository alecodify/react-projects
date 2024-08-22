import { footerLinks, socialMedia } from '../contants';

const Footer = () => {
  return (
    <section className="flex justify-center items-center flex-col sm:py-16 py-6">
        <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
            <div className="flex-[1] flex flex-col justify-start mr-10">
                <img src="/logo.svg" alt="" className="w-[260px] h-[72.14px] object-contain" />
                <p className="mt-4 max-w-[312px] font-normal text-dimWhite text-[18px] leading-[30.8px]"> A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footer) => (
                    <div key={footer.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                        <h4 className='font-medium text-[18px] text-white leading-[27px]'>{footer.title}</h4>
                        <ul className='list-none mt-4'>
                            {footer.links.map((link, index) => (
                                <li key={link.name} className={`font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footer.links.length -1 ? "mb-4" : "mb-0"}`}>{link.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
            <p className='font-normal text-center text-[18px] leading-[27px] text-white'>Copyright Ⓒ 2024 HooBank. All Rights Reserved.</p>
             <div className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map((social, index) => (
                    <img src={social.icon} key={social.id} alt="" className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1  ? "mr-6" : "mr-0"}`} onClick={() => window.open(social.link)} />
                ))}
             </div>
        </div>
    </section>
  )
}

export default Footer