// JS V2 block-3  Модуль 3 Объекты. Операции rest и spread
 
  // Задача 1 Решение --------------------------------------------
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
   rating: 4,
   price: 2153,
   tags: ["premium", "promoted", "top"],
};
  // Задача 2 Решение --------------------------------------------
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner:{
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com"
    }
  };
  // Задача 3 Решение --------------------------------------------
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line
  
  // Задача 4 Решение --------------------------------------------
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[numberOfTags - 1];
  // Change code above this line
  
  // Задача 5 Решение --------------------------------------------
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment["rating"];
  const aptDescr = apartment["descr"];
  const aptPrice = apartment["price"];
  const aptTags = apartment["tags"];
  // Change code above this line
  
  // Задача 6 Решение --------------------------------------------
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = "Henry Sibola";
  apartment.tags.push("trusted")
  // Change code below this line
  
  // Задача 7 Решение --------------------------------------------
  
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  
  };
  
  // Change code below this line
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = { };
  apartment.location.country = "Jamaica";
  apartment.location.city = "Kingston";

  
  // Задача 8 Решение --------------------------------------------
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
  // Change code below this line
  // Change code above this line
};
  // Задача 9 Решение --------------------------------------------
  const emailInputName = "email";
  const passwordInputName = "password";
  
  const credentials = {
    // Change code below this line
  [emailInputName]:"henry.carter@aptmail.com",
  [passwordInputName]:"jqueryismyjam",
  
  
    // Change code above this line
  };
  // Задача 10 Решение --------------------------------------------
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  for (const key in apartment){
    keys.push(key);
    values.push(apartment[key]);
  }
  // Change code below this line
  
  // Задача 11 Решение --------------------------------------------
  const keys = [];
  const values = [];
  const advert = {
    service: "apt",
  };
  const apartment = Object.create(advert);
  apartment.descr = "Spacious apartment in the city center";
  apartment.rating = 4;
  apartment.price = 2153;
  
  for (const key in apartment) {
    // Change code below this line
  
    
    if(apartment.hasOwnProperty(key)){
    keys.push(key);
    values.push(apartment[key]);
    }
    // Change code above this line
  }
  
  // Задача 12 Решение --------------------------------------------
  function countProps(object) {

    // Change code below this line
    const keys = Object.keys(object)
    let propCount = keys.length;
    // Change code above this line
    return propCount;
  }
  
  // Задача 13 Решение --------------------------------------------
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Change code below this line
  const keys = Object.keys(apartment);
  for (const key of keys){
    // console.log(key);
    // console.log(apartment[key]);
    values.push(apartment[key]);
    // console.log(values);
  }
  // console.log(values);
  // Задача 14 Решение --------------------------------------------
  function countProps(object) {
    // Change code below this line
    const a = Object.keys(object)
    let propCount = a.length;
    console.log(propCount);
    return propCount;
    // Change code above this line
  }
  
  // Задача 15 Решение --------------------------------------------
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  // Change code below this line
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);
  // Задача 16 Решение --------------------------------------------
  function countTotalSalary(salaries) {
    let totalSalary = 0;
    const values = Object.values(salaries)
    for (const value of values) {
      totalSalary += value
    }
  
    // Change code above this line
    return totalSalary;
  }
  // Задача 17 Решение --------------------------------------------
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  for (const color of colors) {
    hexColors.push(color.hex)
    rgbColors.push(color.rgb)
  }
  // Задача 18 Решение --------------------------------------------
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
    // Change code below this line
   for (const product of products) {
          
          if (product.name === productName) {
              return product.price
          }
          
      }
  return null
  
    // Change code above this line
  }
  // Задача 19 Решение --------------------------------------------
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    // Change code below this line
    
  let a = [];
  for (const product of products){
    // console.log(product);
    for (const p in product){
      // console.log(p);
      if (p === propName){
        a.push(product[propName]);
      }
    }
      // a.push(product[propName]);
    
      
    }
    
  console.log(a);
  return a;
  }
  // Задача 20 Решение --------------------------------------------
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    let b = 0;
    for (const product of products){
     
      if (product.name === productName){
        b = product.price * product.quantity; 
       
      }
    }
  
    console.log(b);
    return b;
  }
  // Задача 21 Решение --------------------------------------------
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  const {yesterday, today, tomorrow} = highTemperatures;
  
  
  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;
  
  // Задача 22 Решение --------------------------------------------
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;
  
  
  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;
  
  // Задача 23 Решение --------------------------------------------
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;
  // const highYesterday = highTemperatures.yesterday;
  // const highToday = highTemperatures.today;
  // const highTomorrow = highTemperatures.tomorrow;
  // const highIcon = highTemperatures.icon;
  
  // Change code above this line
  const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  
  // Задача 24 Решение --------------------------------------------
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  
  for (const {hex, rgb} of colors) {
    
    hexColors.push(hex);
    rgbColors.push(rgb);
  }
  
  // Задача 25 Решение --------------------------------------------
  const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Change code below this line
  const { 
    today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow:{ low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", }, } = forecast;
  // const highToday = forecast.today.high;
  // const lowToday = forecast.today.low;
  // const todayIcon = forecast.today.icon;
  
  // const highTomorrow = forecast.tomorrow.high;
  // const lowTomorrow = forecast.tomorrow.low;
  // const tomorrowIcon = forecast.tomorrow.icon;
  
  // Задача 26 Решение --------------------------------------------
// Change code below this line
function calculateMeanTemperature(forecast) {
    const { today: {low: todayLow, high: todayHigh, },
    tomorrow: {low: tomorrowLow, high: tomorrowHigh, },
    } = forecast;
    // const todayLow = forecast.today.low;
    // const todayHigh = forecast.today.high;
    // const tomorrowLow = forecast.tomorrow.low;
    // const tomorrowHigh = forecast.tomorrow.high;
  
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }
  
  // Задача 27 Решение --------------------------------------------
  const scores = [89, 64, 42, 17, 93, 51, 26];
  // Change code below this line
  const bestScore = Math.max(...scores);
  const worstScore = Math.min(...scores);
  
  // Задача 28 Решение --------------------------------------------
  const firstGroupScores = [64, 42, 93];
  const secondGroupScores = [89, 14, 51, 26];
  const thirdGroupScores = [29, 47, 18, 97, 81];
  // Change code below this line
  const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
  const bestScore = Math.max(...allScores);
  const worstScore = Math.min(...allScores);
  
  
  // Задача 29 Решение --------------------------------------------
  const defaultSettings = {
    theme: "light",
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
  };
  const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
  };
  // Change code below this line
  const finalSettings = {...defaultSettings, ...overrideSettings};
  
  // Задача 30 Решение --------------------------------------------
  function makeTask(data) {

    // const completed = false;
    // const category = "General";
    // const priority = "Normal";
  
    const a = {category: "General", priority: "Normal", completed: false,
    };
    const b = {...a, ...data};
  
  
    // Change code above this line
    // console.log(b);
    // Change code above this line
    return b;
  }
  // Задача 31 Решение --------------------------------------------
// Change code below this line
function add(...args) {
    // Change code above this line
    let a = 0;
    for (const arg of args){
      a += arg;
    }
    // console.log(a);
    return a;
  }
  
  // Задача 32 Решение --------------------------------------------
   // Change code below this line
function addOverNum(firstNumber, ...args) {
    let total = 0;
  
    for (const arg of args) {
      if (firstNumber < arg){
      total += arg;
      }
    }
  
    return total;
    // Change code above this line
  }
  
  // Задача 33 Решение --------------------------------------------
// Change code below this line
function findMatches(first, ...args) {
    const matches = []; // Don't change this line
  for (let i = 0; i < args.length; i++){
        //  console.log(args[i]);
        //  console.log(first[i]);
         if (first.includes(args[i])){
          matches.push(args[i]);
         }
        }
    // Change code above this line
    return matches;
  }
  // Задача 34 Решение --------------------------------------------
  const bookShelf = {
    // Change code below this line
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
      return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName){
      return `Updating book ${oldName} to ${newName}`;
    },
    // Change code above this line
  };
  // Задача 35 Решение --------------------------------------------
  const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
      const a = this.books.indexOf(oldName);
      const b = this.books.splice(a, 1, newName);
      // Change code below this line
  
  
  return bookShelf;
      // Change code above this line
    },
  };
  // Задача 36 Решение --------------------------------------------
  const atTheOldToad = {
    // Change code below this line
  potions: [],
  
    // Change code above this line
  };
  console.log(atTheOldToad.potions);
  // Задача 37 Решение --------------------------------------------
  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    getPotions(){
    return this.potions;
    },
    // Change code below this line
  
    // Change code above this line
  };
  
  // Задача 38 Решение --------------------------------------------
  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    addPotion(potionName) {
      // Change code below this line
    this.potions.push(potionName);
  
  
      // Change code above this line
    },
  };
  // Задача 39 Решение --------------------------------------------
  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    removePotion(potionName) {
      // Change code below this line
    const a = this.potions.indexOf(potionName);
    this.potions.splice(a, 1)
  
  
      // Change code above this line
    },
  };
  
  // Задача 40 Решение --------------------------------------------
  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    updatePotionName(oldName, newName) {
      // Change code below this line
    const a = this.potions.indexOf(oldName);
    this.potions.splice(a, 1, newName)
  
      // Change code above this line
    },
  };
  
  // Задача 41 Решение --------------------------------------------
  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
              return this.potions;
            },
  
            addPotion(newPotion) {
              for (const el of this.potions) {
             if (el.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
                }
          }
              this.potions.push(newPotion);
            },
  
            removePotion(potionName) {
              const {potions} = this;
  
              for (let i = 0; i < potions.length; i += 1) {
                if (potionName === potions[i].name) {
                potions.splice(i, 1);
                }
  
              }
          return `Potion ${potionName} is not in inventory!`;
            },
            updatePotionName(oldName, newName) {
  
              for(const potion of this.potions) {
                 if (potion['name'] === oldName) {
               potion['name'] = newName;
                 }
              }
            }
        // Change code above this line
      };
  