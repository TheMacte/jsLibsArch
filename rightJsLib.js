// Объявление области видимости библиотеки
var rightJsLib = (() => {
    // Приватные переменные и функции

    var examplePrivateVariable = 'This is a private variable'; // Пример приватной переменной

    function examplePrivateFunction() { // Пример приватной библиотеки
        console.log("privat function");
    }

    // Публичные методы и свойства, доступные внешним пользователям библиотеки
    return {
        examplePublicProperty: 'This is a public property', // Пример публичного свойства
        
        examplePublicMethod: () => { // Пример публичного метода
            console.log("public function");
        },


    };
})();
