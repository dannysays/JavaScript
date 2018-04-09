// Output function; Функция вывода чего-либо в консоль
console.log("Hello Blackberry!") 


/* 
Statements, but are not defined. 
Можно писать инструкции как в строку, так и чередуя.
Язык игнорирует пустые символы и символы переноса строки, 
поэтому обычно инструкции пишут на разных строчках.
В конце каждой строки парсер вставляет точки с запятой сам,
но лучше обезопасить себя от трудноуловимых проблем и ставить их самому.
*/
statement; statement; statement;

statement;
statement;
statement;


// Блок инструкций (составная инструкция) - используется для объединения в одну инструкцию. Block Statement.
{
	statement;
	statement;
	statement;
}

// Пустые инструкции - Empty Statements
;;;;;;;;;; 

// Self-invoking function
script;(function(){}());script; 

/* Нужно ставить semicolon перед своей самовызывающейся функции. 
Скрипты могут сжиматься и сцепляться в один, поэтому лучше подстраховаться. 
При этом, если окажется что и чужой и твой скрипты имели semicolon, 
то просто создастся EmptyStatement, который никак не навредит.
*/