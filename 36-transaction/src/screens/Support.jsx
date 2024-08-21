import { DCard, Layout, SCard, SContact } from '../modules';
import { AiTwotoneMessage } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Support = () => {
  return (
    <Layout>
      <div className="space-y-20">
        <SCard icon={IoMdMail} leftComponent={<SContact />} title={"Contact Us"} text={"Have a question or just want to know more? Feel free to reach out to us."} />
        <SCard icon={AiTwotoneMessage} title={"Live Chat"} text={"Don't have time to wait for answer? Chat with us now."} leftComponent={
          <DCard inverted={true} tagText={"Contact"} imgUrl={"/grid_bg.svg"} text={"Learn more about our real estate, mortgage and corporate account services"} />
        } />
      </div>
    </Layout>
  )
}

export default Support