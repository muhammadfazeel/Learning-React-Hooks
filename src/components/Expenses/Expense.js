import ExpenseItems from './ExpenseItems';
import './Expense.css';
import Card from '../UI/Card';

const Expense = () => {
    let arr = [
        {
            id: "e1",
            date: new Date(),
            title: "Car Insurance",
            amount: 555.00
        },
        {
            id: "e2",
            date: new Date(),
            title: "Home Insurance",
            amount: 1000.00
        },
        {
            id: "e3",
            date: new Date(),
            title: "Shop Insurance",
            amount: 999.00
        },
        {
            id: "e4",
            date: new Date(),
            title: "Mobile Insurance",
            amount: 55.00
        }
    ];

    return (
        <Card className="expenses">
            <ExpenseItems title={arr[0].title} amount={arr[0].amount} date={arr[0].date} />
            <ExpenseItems title={arr[1].title} amount={arr[1].amount} date={arr[1].date} />
            <ExpenseItems title={arr[2].title} amount={arr[2].amount} date={arr[2].date} />
            <ExpenseItems title={arr[3].title} amount={arr[3].amount} date={arr[3].date} />
        </Card>
    );
}

export default Expense;