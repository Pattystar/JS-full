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
    chooseExpenses : function() {
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
	},
    chooseOptExpenses: function() {
	    for (let i = 0; i <=2; i++) {
	        let optExp = prompt("Введите необязательную статью расходов в этом месяце:", ""),
	            optExpVal = +prompt("Во сколько обойдется:", '');
	        while ((isNaN(optExpVal)) || optExpVal == '' || optExpVal == null) {
	            optExpVal = +prompt("Во сколько обойдется:", "");
	        } 
	        appData.optionalExpenses[i] = optExpVal;       
	    }
	},
    detectDayBudget: function() {
	    appData.moneyPerDay = (appData.budget/30).toFixed();
	    alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
    detectLevel: function() {
	    if (appData.moneyPerDay <= 100) {
	        console.log("Минимальный уровень достатка");
	    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
	        console.log("Средний уровень достатка");
	    } else if (appData.moneyPerDay > 2000) {
	        console.log("Высокий уровень достатка");
	    } else {
	        console.log("Произошла ошибка");
	    }
	},
    checkSavings:  function() {
	    if (appData.savings) {
	        let savingVal = +prompt("Введите сумму накопления:"),
	            savingPercent = +prompt("Введите процентную ставку:");
	        appData.monthIncome = savingVal/100/12*savingPercent;
	        alert ("Ежемесячный доход с Вашего депозита: " + appData.monthIncome);
	    }
	},
	chooseIncome: function() {
		let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
		while (typeof(items) !== "string" || items == '' || (typeof(items)) == null) {
			items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
		};
		appData.income = items.split(", ");
		appData.income.push(prompt("Может, что-то еще?", ''));
		appData.income.sort();

		appData.income.forEach(function(item, i, array) {
			alert("Способы доп. заработка: " + ++i + ": " + item);
		})
	}
	
}

console.log("Наша программа включает в себя данные:");
for (let item in appData) {
	console.log(item);
}




