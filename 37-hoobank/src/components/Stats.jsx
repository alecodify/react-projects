import { stats } from '../contants';

const Stats = () => {
  return (
    <section className='flex justify-center items-center flex-wrap sm:mb-20 mb-6'>
        {stats.map((data) => (
            <div key={data.id} className='flex-1 flex justify-start items-center flex-row m-3'>
                <h4 className='font-semibold xs:text-[40px] text-[25px] xs:leading-[53.16px] leading-[43.16px] text-white'>{data.value}</h4>
                <p className="font-normal xs:text-[20px] text-[12px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">{data.title}</p>
            </div>
        ))}
    </section>
  )
}

export default Stats