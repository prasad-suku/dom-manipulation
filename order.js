const events = require("events");
const fs = require("fs");
const path = require("path");

const orderprocess = new events();

// step-1

orderprocess.on("orderprocess", (order) => {
  console.log(`order processing ${order.id} please wait`);
  orderprocess.emit("ordertaken", order);
});

orderprocess.on("ordertaken", (order) => {
  console.log(`order takened product name : ${order.name}`);
  orderprocess.emit("orderdelivered", order);
});

// delivered event lisetner
orderprocess.on("orderdelivered", (order) => {
  const orderdetails = `order id:${order.id} , ordername,${order.name}, price:${order.price}\n`;

  if (orderdetails) {
    fs.appendFile(
      path.join(__dirname, "orderdets.txt"),
      orderdetails,
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log(`successully delivered `);
      }
    );
  }
});

const order = { id: 1, name: "laptop", price: 34244234 };
const order1 = { id: 2, name: "phone", price: 3434 };
const order2 = { id: 3, name: "chair", price: 34244234 };

orderprocess.emit("orderprocess", order);
orderprocess.emit("orderprocess", order1);
orderprocess.emit("orderprocess", order2);
