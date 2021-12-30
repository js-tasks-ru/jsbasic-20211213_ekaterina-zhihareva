let calculator = {
    a: 0,
    b: 0,
    sum: function() {
      return calculator.a + calculator.b;
    },
    mul: function() {
      return calculator.a * calculator.b;
    },
    read: function(a, b) {
      calculator.a = a;
      calculator.b = b;
    }
  }

  calculator.read(3, 5);
  console.log(calculator.sum()); // 8
  console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
