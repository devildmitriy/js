'use strict';

let money = +prompt("Ваш бюджет на месяц?", "20000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-04");

let appData = {
    budjet: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: false
};


for (let i = 0; i < 2; i++) {
    let question1 = prompt('Введите обязательную статью расходов в этом месяце', 'например еда');
    let question2 = prompt('Во сколько обойдется?', '1500');

    if (typeof (question1) === 'string' && typeof (question1) != null && typeof (question2) != null &&
        question1 != '' && question2 != '' && question1.length < 50) {
        console.log("done");
        appData.expenses[question1] = question2;
    } else {

    };

}
/*
while ( i < 2){
    i++;
    let question1 = prompt('Введите обязательную статью расходов в этом месяце', 'например еда');
    let question2 = prompt('Во сколько обойдется?', '1500');

    if (typeof (question1) === 'string' && typeof (question1) != null && typeof (question2) != null &&
        question1 != '' && question2 != '' && question1.length < 50) {
        console.log("done");
        appData.expenses[question1] = question2;
    } else {

    };
}
*/
appData.moneyPerDay = appData.budjet / 30;

//let budjet = (money - appData.expenses.question1 - appData.expenses.question3) / 30 ;

alert('бюджет на день' + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log('min');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('norm');
} else if (appData.moneyPerDay > 2000) {
    console.log('max');
} else {
    console.log('WTF'); 
}