import { DCard, DPortfolio, DPrice, DTransactions, Layout } from '../modules';

const Dashboard = () => {

    return (
        <Layout title={"Dashboard"}>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
               <div className="col-span-1 xl:col-span-2"><DPortfolio /></div>

               <div className="col-span-1"><DPrice /></div>

               <div className="col-span-1"><DTransactions /></div>

               <div className="col-span-1">
                    <DCard  imgUrl="/dot_bg.svg" text=" Learn more about Loans – Keep your Bitcoin, access it’s value without selling it" tagText="Loan" inverted={false} />
               </div>

               <div className="col-span-1">
                    <DCard inverted={true} tagText="Contact" imgUrl="/grid_bg.svg" text="Learn more about our real estate, mortgage, and  corporate account services"/>
               </div>
            </div>
        </Layout>
    )
}

export default Dashboard