let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

/*let i = 0;
while(i < 2) {
    let firstQ = prompt("Введите обязательную статью расходов в этом месяце", ""), // first point of expenses
    secondQ = prompt("Во сколько обойдется?", ""); // value of first point of expenses

    if ((typeof(firstQ)) != null && (typeof(secondQ)) != null && firstQ != '' && secondQ != '' 
    && firstQ.length <= 50) {
        console.log("Done");
        appData.expenses[firstQ] = secondQ;
    } else {
        alert("Вы ввели неверные данные. Повторите, пожалуйста, ввод: ")
        i--;
    }
    i++;
}; */

/*let i = 0;
while(i < 2) 
do {
    let firstQ = prompt("Введите обязательную статью расходов в этом месяце", ""), // first point of expenses
    secondQ = prompt("Во сколько обойдется?", ""); // value of first point of expenses

    if ((typeof(firstQ)) != null && (typeof(secondQ)) != null && firstQ != '' && secondQ != '' 
    && firstQ.length <= 50) {
        console.log("Done");
        appData.expenses[firstQ] = secondQ;
    } else {
        alert("Вы ввели неверные данные. Повторите, пожалуйста, ввод: ")
        i--;
    };
    i++;
} while (i < 2);  */

for (let i = 0; i<2; i++) {
    let firstQ = prompt("Введите обязательную статью расходов в этом месяце", ""), // first point of expenses
    secondQ = prompt("Во сколько обойдется?", ""); // value of first point of expenses

    if ((typeof(firstQ)) != null && (typeof(secondQ)) != null && firstQ != '' && secondQ != '' 
    && firstQ.length <= 50) {
        console.log("Done");
        appData.expenses[firstQ] = secondQ;
    } else {
        alert("Вы ввели неверные данные. Повторите, пожалуйста, ввод: ")
        i--;
    }
};

appData.moneyPerDay = (appData.budget/30);
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);



