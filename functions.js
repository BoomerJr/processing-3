export { human,humans,harmman} 
class human {
  constructor(name, adress, birth_day, payment_method) {
    this._name = name;
    this._adress = adress;
    this._birth_day = new Date(birth_day);
    this._payment_method = payment_method;
  }
  get name() {
    return this._name;
  }
  get adress() {
    return this._adress;
  }
  get birth_day() {
    return this._birth_day;
  }
  get payment_method() {
    return this._payment_method;
  }
  get age() {
    return 2024 - this._birth_day.getFullYear;
  }
}

const genHuman = () => {
  const first_names = ["John", "Emma", "Michael", "Olivia", "William", "Sophia", "James", "Ava", "Robert",
    "Isabella", "David", "Mia", "Richard", "Emily", "Joseph", "Abigail", "Charles", "Grace", "Thomas",
    "Charlotte", "Daniel", "Liam", "Mary", "Henry", "Ella", "Christopher", "Harper", "Patricia", "Alexander",
    "Amelia", "Elizabeth", "Benjamin", "Ethan", "Lily", "Matthew", "Madison", "George", "Aiden", "Anna", "Edward", 
    "Evelyn", "Frank", "Chloe", "Samuel", "Lucas", "Jessica", "Emma", "Sophie", "Joshua", "Avery"]

  const last_names = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson",
    "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia",
    "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young",
    "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Nelson", "Carter",
    "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards","Collins", "Stewart"]

  const street_names = ["Maple", "Main", "Oak", "Cedar", "Pine", "Elm", "Willow", "Birch",
    "Sycamore", "Cypress", "Magnolia", "Juniper", "Hickory", "Chestnut", "Spruce", "Poplar",
    "Cherry", "Locust", "Sycamore", "Beech", "Mulberry", "Cottonwood", "Ash", "Walnut", "Hemlock",
    "Linden", "Acacia", "Dogwood", "Redwood", "Alder", "Fir", "Holly", "Palm", "Cactus", "Bamboo",
    "Palm", "Sage", "Juniper", "Mesquite", "Pine", "Spruce", "Rosewood", "Willow", "Cypress", "Birch", "Maple", "Cedar", "Lilac", "Tulip"]

  const street_suffixes = [
    "Street","Avenue","Lane","Boulevard","Road","Drive","Way","Court","Place",
    "Terrace","Circle","Square","Alley","Path","Trail","Pathway","Crescent","Plaza",
    "Parkway","Grove","Trace","Mews","Row","Run","Promenade","Walk","Pass","Gate",
    "Commons","Loop","Crossing","Point","Ridge","Junction","Place","Gardens","View",
    "Heights","Haven","Manor","Ranch","Vista","Cove","Harbor","Summit","Landing",
    "Falls","Dale","Woods",
  ];
  const payment_methods = [
    "Credit Card","Debit Card","Cash","Check","Bank Transfer","PayPal","Venmo",
    "Apple Pay","Google Pay","Cryptocurrency","Money Order","Wire Transfer",
    "Mobile Wallet","Contactless Payment","Prepaid Card","Gift Card","ACH Payment",
    "Direct Deposit","Cash App","Stripe","Square","Zelle","Western Union","MoneyGram",
    "Chase QuickPay","Samsung Pay","Amazon Pay","Bitcoin","Ethereum","Litecoin",
    "Diners Club","Discover","MasterCard","Visa","American Express","JCB Card","Maestro",
    "UnionPay","Skrill","Neteller","Alipay","WeChat Pay","Cashiers Check","Travelers Check",
    "Barter","Barclaycard","Dwolla",
  ];

  return new human(
    first_names[Math.round(Math.random() * 52)] +
      " " +
      last_names[Math.round(Math.random() * 50)],
      Math.round(Math.random()*1024)+1 + " " +
      street_names[Math.round(Math.random() * 50)]+ " "+
      street_suffixes[Math.round(Math.random() * 50)]
    ,
    [
      Math.round(Math.random() * 124) + 1900,
      Math.round(Math.random() * 11) + 1,
      Math.round(Math.random() * 29) + 1,
    ],
    payment_methods[Math.round(Math.random() * 50)]
  );
};

const humans = (num) =>{
    let array = []
    for(let i = 1; i<=num;i++){
        array.push(genHuman())
    }
    return array
}
const data = {
    human, humans,genHuman
}
module.exports = data