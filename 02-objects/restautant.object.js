const restaurant = {
  name: "The Spice Villa",
  location: "Downtown, New York",
  categories: ["Indian", "Vegetarian", "Organic", "Vegan"],
  menu: {
    starters: ["Samosa", "Paneer Tikka", "Spring Rolls"],
    mainCourse: ["Butter Paneer", "Dal Makhani", "Veg Biryani"],
    desserts: ["Gulab Jamun", "Rasgulla", "Kheer"],
  },
  openingHours: {
    mon: { open: 12, close: 22 },
    tue: { open: 12, close: 22 },
    wed: { open: 12, close: 22 },
    thu: { open: 12, close: 22 },
    fri: { open: 12, close: 23 },
    sat: { open: 10, close: 23 },
    sun: { open: 10, close: 21 },
  },
  devilertime: "30min",
  price: "199/-",
  // Methods
  order(starterIndex, mainIndex) {
    if (
      starterIndex >= 0 &&
      starterIndex <= 2 &&
      mainIndex >= 0 &&
      mainIndex <= 2
    ) {
      return `You ordered ${this.menu.starters[starterIndex]} and ${this.menu.mainCourse[mainIndex]}.`;
    } else {
      return "You ordered which is not able!";
    }
  },

  isOpen(day, hour) {
    const { open, close } = this.openingHours[day] || {};
    if (open === undefined) return "Closed today";
    return hour >= open && hour < close ? "Open" : "Closed";
  },

  addDish(type, dishName) {
    if (this.menu[type]) {
      this.menu[type].push(dishName);
      console.log(`${dishName} added to ${type}`);
    } else {
      console.log(`Menu type "${type}" does not exist`);
    }
  },
};

// Normal way to access the object props
const name = restaurant.name;
const Bname = restaurant["name"];
const categories = restaurant["categories"];
const [data1, data2, data3, data4] = categories;
console.log(data1);
console.log(data3);

// Methods
const isOpenChecker = restaurant.isOpen(11, 14);
console.log(isOpenChecker);

// How to add Dish into the restaurant object
restaurant.addDish("starters", "Biryani");

// let's order
const recievedOrderName = restaurant.order(55, 12);
console.error(recievedOrderName);

//  ES6 modules - nested level
// object destructuring in javascript
const { menu, openingHours } = restaurant;
const { mon } = openingHours;
const { open, close } = mon;
console.log(open, close);

// Array destructuring in javascript
const { starters, mainCourse } = menu;
const [dish1, dish2, dish3] = starters;
console.log(dish1, dish2, dish3);
