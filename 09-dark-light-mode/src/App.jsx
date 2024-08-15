import { Header, Aricle } from "./components"
import { articles } from "./data";

function App() {

  return (
    <main>
      <Header />
      <section className="articles">
        {articles.map((item) => (
          <Aricle key={item.id} {...item} />
        ))}
      </section>
    </main>
  )
}

export default App
