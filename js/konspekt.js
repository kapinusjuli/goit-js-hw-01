

const Car = function (value) {
    // const { brand, model, price } = config;
    // 2. Функция вызывается в контексте созданного объекта,
    //    то есть в this записывается ссылка на него
    console.log(this);
    // this.a = value;
    // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
    //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
  
    // 4. Ссылка на обьект возвращается в место вызова new Car
  };
  const myCar = new Car(5);
//   console.log(myCar);

  const myCar2 = new Car(15);
//   console.log(myCar2);

  
