let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
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

function chooseExpenses() {
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
    }
};
 
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i <=2; i++) {
        let optExp = prompt("Введите необязательную статью расходов в этом месяце:", ""),
            optExpVal = +prompt("Во сколько обойдется:", '');
        while ((isNaN(optExpVal)) || optExpVal == '' || optExpVal == null) {
            optExpVal = +prompt("Во сколько обойдется:", "");
        } 
        appData.optionalExpenses[i] = optExpVal;       
    }
}

chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings () {
    if (appData.savings) {
        let savingVal = +prompt("Введите сумму накопления:"),
            savingPercent = +prompt("Введите процентную ставку:");
        appData.monthIncome = savingVal/100/12*savingPercent;
        alert ("Ежемесячный доход с Вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();




