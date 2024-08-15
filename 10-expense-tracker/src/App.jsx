import { Add, Balance, Header, IncomeExpenses, List } from './components';

function App() {

  return (
    <div>
      <Header />
      <main>
        <Balance />
        <IncomeExpenses />
        <List />
        <Add />
      </main>
    </div>
  )
}

export default App
