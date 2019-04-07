'use strict';

var money = prompt("Ваш бюджет на месяц?", "20000");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-04");

var question1 = prompt('Введите обязательную статью расходов в этом месяце', 'например еда');
var question2 = prompt('Во сколько обойдется?', '1500');
var question3 = prompt('Введите обязательную статью расходов в этом месяце', 'например комуналка');
var question4 = prompt('Во сколько обойдется?', '2000');

var appData = {
    money,
    time,
    expenses: { question1: question2,
                question3: question4},
    optionalExpenses: {},
    income: [],
    savings: false
};


let budjet = (money - appData.expenses.question1 - appData.expenses.question3) / 30 ;

alert('Бюджет на 1 день = ' + budjet);

/* Сколько типов данных существует в JS? - 6:
    number,string,boolean,null,udefined,object

    Как вывести информацию в консоль? - console.log('text');

    Какая функция операторов || и &&? - не понятный вопрос
     первое это логическое "или"  второе логическое "и"

 */