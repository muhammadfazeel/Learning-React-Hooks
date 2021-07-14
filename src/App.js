import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expense />
    </div>
  );
}

export default App;
