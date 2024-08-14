import { useGlobalContext } from "../context/context";
import Card from "./Card";

const List = () => {
    const {cocktails, loading } = useGlobalContext();
    if (loading) {
        return <img src="/spinner.gif" alt="Loading..." className="loader" />
    }

    if (cocktails.length < 1) {
        return (
            <h2 className="title">no cocktiles matched your search criteria</h2>
        )
    }

    return (
        <section className="section cocktails">
            <h2 className="title">cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default List