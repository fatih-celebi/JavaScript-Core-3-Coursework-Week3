let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let totalPrice = 0;
for (let index = 0; index < order.length; index++) {
  let sum = order[index]["unitPrice"];
  totalPrice += sum;
}
function createReceipt (order) {
  console.log(`QTY    ITEM       TOTAL`);
  order.forEach((item) => {
    console.log(
      `${item.quantity}    ${item.itemName}     ${item.unitPrice}`
    );
  })
  console.log(`     Total Price:   ${totalPrice}`);
}

createReceipt (order);


