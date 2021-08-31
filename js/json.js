//javascript object Notation
//JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
// console.log(shopStringified);
console.log(shopStringified.owner);// এভাবে দিলে undefined দেখাবে। আউটপুট দেখাবে না তাই stringify এ এভাবে দেখানো যায় না। 
const converted = JSON.parse(shopStringified);
console.log(converted);
// console.log(converted.owner);// এভাবে দিলেও আউটপুট দেখাবে - {name: "Alia Bhatt", profession: "actor"}

