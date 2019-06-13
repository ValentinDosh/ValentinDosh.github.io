window.onload = function(){
	//get Elements numbers
	let buttonOne = document.querySelector('button[name=one]');
	let buttonTwo = document.querySelector('button[name=two]');
	let buttonThree = document.querySelector('button[name=three]');
	let buttonFour = document.querySelector('button[name=four]');
	let buttonFive = document.querySelector('button[name=five]');
	let buttonSix = document.querySelector('button[name=six]');
	let buttonSeven = document.querySelector('button[name=seven]');
	let buttonEate = document.querySelector('button[name=eate]');
	let buttonNine = document.querySelector('button[name=nine]');
	let buttonZero = document.querySelector('button[name=zero]');
	
	// get Elements operators
	let plus = document.querySelector('button[name=plus]');
	let minus = document.querySelector('button[name=minus]');
	let multiplication = document.querySelector('button[name=multiplication]');
	let division = document.querySelector('button[name=division]');

	// other Elements
	let deletde = document.querySelector('button[name=delete]');
	let wipe = document.querySelector('button[name=wipe]');
	let dot = document.querySelector('button[name=dot]');
	let equally = document.querySelector('button[name=equally]');

	// output element
	let field = document.querySelector('button[name=field]');
	



	// handlers numbers
	buttonOne.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonOne.value;
	}

	buttonTwo.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonTwo.value;
	}

	buttonThree.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonThree.value;
	}

	buttonFour.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonFour.value;
	}

	buttonFive.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonFive.value;
	}

	buttonSix.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonSix.value;
	}

	buttonSeven.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonSeven.value;
	}

	buttonEate.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonEate.value;
	}

	buttonNine.onclick = function(){
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			field.innerHTML ='';
			equally.setAttribute('data-equally', 'no-equally');
		}
		field.innerHTML += buttonNine.value;
	}

	buttonZero.onclick = function(){
		// если начало выражения - ничего не делаем
		if(field.innerHTML == '0'
		|| equally.getAttribute('data-equally') == 'equally'){
			equally.setAttribute('data-equally', 'no-equally');
		}
		else if(field.innerHTML[field.innerHTML.length-1] == '/'){
			alert('На ноль делить нельзя');
		}
		else{
			field.innerHTML += buttonZero.value;
		}
	}


	// handlers operators
	plus.onclick = function(){
		// !Ошибка! Если начало выражения или оператор уже стоит в конце
		// Выходим из обработчика
		if(field.innerHTML[field.innerHTML.length-1] == '+'
		|| field.innerHTML[field.innerHTML.length-1] == '/'
		|| field.innerHTML[field.innerHTML.length-1] == '*'
		|| field.innerHTML[field.innerHTML.length-1] == '-'
		|| field.innerHTML[field.innerHTML.length-1] == '.'){
			alert('Введите число (0-9)');
		}
		// в этом блоке последний сисмвол - число
		else{

			for (var i = field.innerHTML.length - 1; i >= 0; i--) {
					// если есть ')' в выражении значит у нас нету в конце
					// отрицательного значения, а значит и закрывать его скобкой
					// не нужно поэтому ставим просто минус
					// выходим из цикла
					if(field.innerHTML[i] == ')'){
						field.innerHTML += plus.value;
						return;
					}
					// если в выражении есть связка (-(0-9)) 
					// значит закрываем отрицательное число скобкой
					// и ставим (-)
					// выходим из цикла
					if(parseInt(field.innerHTML[i]) >= 0
						&& parseInt(field.innerHTML[i]) < 10
						&& field.innerHTML[i-1] == '-'
						&& field.innerHTML[i-2] == '('){
						field.innerHTML += ')+';
						return;
					}
				}
					// если ни одно из условий двух не выполнилось
					// добавляем просто минус
					field.innerHTML += plus.value;
		}
	}


	minus.onclick = function(){
		// если начинаем ввод, значит хотим вставить отрицательное значение
		// тогда добавляем скобки для наглядности
		if(field.innerHTML == '0'){
			field.innerHTML = '(-';
		}
		// !ОШИБКА! если выражение заканчиваеься на '(-' 
		// или, заканчиватся на точку
		// можно вводить только цифры
		else if((field.innerHTML[field.innerHTML.length-1] == '-' 
			&& field.innerHTML[field.innerHTML.length-2] == '(')
			|| field.innerHTML[field.innerHTML.length-1] == '.'){
			alert('Введите цифру: 0-9');
			return;
		}
		// если выражение заканчивается на оператор, значит мы хотим
		// добавить в выражение отрицательное число
		// поэтому добавлям скобку для наглядности и минус
		else if(field.innerHTML[field.innerHTML.length-1] == '+'
			|| field.innerHTML[field.innerHTML.length-1] == '/'
			|| field.innerHTML[field.innerHTML.length-1] == '*'
			|| field.innerHTML[field.innerHTML.length-1] == '-'){
			field.innerHTML += '(-';
		}
		else{
			// первое условие входа в блок: в конце выражения цифра (0-9)
			if(parseInt(field.innerHTML[field.innerHTML.length-1]) >= 0 
			&& parseInt(field.innerHTML[field.innerHTML.length-1]) < 10){

				for (var i = field.innerHTML.length - 1; i >= 0; i--) {
					// если есть ')' в выражении значит у нас нету в конце
					// отрицательного значения, а значит и закрывать его скобкой
					// не нужно поэтому ставим просто минус
					// выходим из цикла
					if(field.innerHTML[i] == ')'){
						field.innerHTML += minus.value;
						return;
					}
					// если в выражении есть связка (-(0-9)) 
					// значит закрываем отрицательное число скобкой
					// и ставим (-)
					// выходим из цикла
					if(parseInt(field.innerHTML[i]) >= 0
						&& parseInt(field.innerHTML[i]) < 10
						&& field.innerHTML[i-1] == '-'
						&& field.innerHTML[i-2] == '('){
						field.innerHTML += ')-';
						return;
					}
				}
					// если ни одно из условий двух не выполнилось
					// добавляем просто минус
					field.innerHTML += minus.value;
			}
			// else{
			// 	// не нужный блок условия
			// }	
		}
	}

	multiplication.onclick = function(){
		// !Ошибка! Если начало выражения или оператор уже стоит в конце
		// Выходим из обработчика
		if(field.innerHTML[field.innerHTML.length-1] == '+'
		|| field.innerHTML[field.innerHTML.length-1] == '/'
		|| field.innerHTML[field.innerHTML.length-1] == '*'
		|| field.innerHTML[field.innerHTML.length-1] == '-'
		|| field.innerHTML[field.innerHTML.length-1] == '.'){
			alert('Введите число (0-9)');
		}
		// в этом блоке последний сисмвол - число
		else{

			for (var i = field.innerHTML.length - 1; i >= 0; i--) {
					// если есть ')' в выражении значит у нас нету в конце
					// отрицательного значения, а значит и закрывать его скобкой
					// не нужно поэтому ставим просто минус
					// выходим из цикла
					if(field.innerHTML[i] == ')'){
						field.innerHTML += multiplication.value;
						return;
					}
					// если в выражении есть связка (-(0-9)) 
					// значит закрываем отрицательное число скобкой
					// и ставим (-)
					// выходим из цикла
					if(parseInt(field.innerHTML[i]) >= 0
						&& parseInt(field.innerHTML[i]) < 10
						&& field.innerHTML[i-1] == '-'
						&& field.innerHTML[i-2] == '('){
						field.innerHTML += ')*';
						return;
					}
				}
					// если ни одно из условий двух не выполнилось
					// добавляем просто минус
					field.innerHTML += multiplication.value;
		}
	}

	division.onclick = function(){
		// !Ошибка! Если начало выражения или оператор уже стоит в конце
		// Выходим из обработчика
		if(field.innerHTML[field.innerHTML.length-1] == '+'
		|| field.innerHTML[field.innerHTML.length-1] == '/'
		|| field.innerHTML[field.innerHTML.length-1] == '*'
		|| field.innerHTML[field.innerHTML.length-1] == '-'
		|| field.innerHTML[field.innerHTML.length-1] == '.'){
			alert('Введите число (0-9)');
		}
		// в этом блоке последний сисмвол - число
		else{

			for (var i = field.innerHTML.length - 1; i >= 0; i--) {
					// если есть ')' в выражении значит у нас нету в конце
					// отрицательного значения, а значит и закрывать его скобкой
					// не нужно поэтому ставим просто минус
					// выходим из цикла
					if(field.innerHTML[i] == ')'){
						field.innerHTML += division.value;
						return;
					}
					// если в выражении есть связка (-(0-9)) 
					// значит закрываем отрицательное число скобкой
					// и ставим (-)
					// выходим из цикла
					if(parseInt(field.innerHTML[i]) >= 0
						&& parseInt(field.innerHTML[i]) < 10
						&& field.innerHTML[i-1] == '-'
						&& field.innerHTML[i-2] == '('){
						field.innerHTML += ')/';
						return;
					}
				}
					// если ни одно из условий двух не выполнилось
					// добавляем просто минус
					field.innerHTML += division.value;
		}
	}


	// other Elements
	deletde.onclick = function(){
		field.innerHTML = '0';
	}

	wipe.onclick = function(){
		if(field.innerHTML.length == 1){
			field.innerHTML = '0';
		}
		else{
			field.innerHTML = field.innerHTML.substring(0, field.innerHTML.length-1);
		}
	}

	dot.onclick = function(){
		// !Ошибка! если в конце выражения (.,-,+,/,*) выходим из обработчика
		if(field.innerHTML[field.innerHTML.length -1] == dot.value
			|| field.innerHTML[field.innerHTML.length -1] == plus.value
			|| field.innerHTML[field.innerHTML.length -1] == minus.value
			|| field.innerHTML[field.innerHTML.length -1] == multiplication.value
			|| field.innerHTML[field.innerHTML.length -1] == division.value){
			alert('Введите число (0-9)');
			return;
		}
		else{
			// если в этом блоке значит последний символ - цифра(0-9)
			for (var i = field.innerHTML.length - 1; i >= 0; i--){
				// если с конца выражения встречаем оператор
				// или
				// если у нашего выражении пока что только одно число
				// ставим дробную точку и выходим
				if(field.innerHTML[i] == plus.value
				|| field.innerHTML[i] == minus.value
				|| field.innerHTML[i] == multiplication.value
				|| field.innerHTML[i] == division.value
				|| i == 0){
					field.innerHTML += dot.value;
					return;
				}
				// первый if не выполнен, значит,
				// у нас число, если число - ничего не делаем, ищем дальше
				if(parseInt(field.innerHTML[i]) >= 0 
				&& parseInt(field.innerHTML[i]) < 10){
					continue; 
				}
				// !Ошибка! и вот сюда мы попадаем только если, символ не число
				// и если это не оператор, а так же если этот символ стоит раньше оператора
				// значит это точка, и она стоит внутри числа, а значит последнее число
				// в выражении - уж дробное
				else{
					alert('Число уже дробное, введите оператор или число (0-9)');
					return;
				}
			}
		}
	}

	equally.onclick = function(){
		if(parseInt(field.innerHTML[field.innerHTML.length-1]) >= 0 
			&& parseInt(field.innerHTML[field.innerHTML.length-1]) < 10){

				for (var i = field.innerHTML.length - 1; i >= 0; i--) {
					// если есть ')' в выражении значит у нас нету в конце
					// отрицательного значения, а значит и закрывать его скобкой
					// не нужно поэтому ставим просто минус
					// выходим из цикла
					if(field.innerHTML[i] == ')'){
						field.innerHTML = eval(field.innerHTML);
						equally.setAttribute('data-equally', 'equally');
						return;
					}
					// если в выражении есть связка (-(0-9)) 
					// значит закрываем отрицательное число скобкой
					// и ставим (-)
					// выходим из цикла
					if(parseInt(field.innerHTML[i]) >= 0
						&& parseInt(field.innerHTML[i]) < 10
						&& field.innerHTML[i-1] == '-'
						&& field.innerHTML[i-2] == '('){
						field.innerHTML += ')';
						field.innerHTML = eval(field.innerHTML);
						equally.setAttribute('data-equally', 'equally');
						return;
					}
				}
					// если ни одно из условий двух не выполнилось
					// добавляем просто минус
					field.innerHTML = eval(field.innerHTML);
					equally.setAttribute('data-equally', 'equally');
			}
}
	}


	