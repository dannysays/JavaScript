/* Тернарный оператор. Единтсвенный условный оператор, который имеет три операнда. 
Синтаксис: Выражение1 ? Выражение2 : Выражение3 
Выражение1 преобразуется в логический тип.
В случае истинности Выражения1 условный оператор возвращает Выражение2,
а ложь будет возвращать Выражение3*/
var pineapple = 5;
var text = pineapple > 5 ? "There are less than 5 pineapples." : pineapple < 5 ? 
	"There are less than 5 pineapples." : "There are 5 pineapples."
console.log(text);

/* Знак , является бинарным оператором.
Синтаксис: Выражение1, Выражение2 
Оператор сначала вычисляет значение левого операнда, затем вычисляет значение правого,
и возвращает значение правого операнда. */
var orange = (14, 88);
console.log(orange);
console.log((orange, 322));