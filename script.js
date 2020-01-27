let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

let firstQ1 = prompt("Введите обязательную статью расходов в этом месяце"); // first point of expenses
let secondQ1 = prompt("Во сколько обойдется?"); // value of first point of expenses
let firstQ2 = prompt("Введите обязательную статью расходов в этом месяце"); // second point of expenses
let secondQ2 = prompt("Во сколько обойдется?"); //value of second point of expenses

appData.expenses[firstQ1] = secondQ1;
appData.expenses[firstQ2] = secondQ2;

alert(appData.budget/30);



