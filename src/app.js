const { human, humans, genHuman } = require("../functions");
const arry = [
  new human("test first", "1 dontMatter st", [110, 4, 18], "visa"),
  new human("test second", "2 dontMatter st", [45, 9, 2], "visa"),
];
const segregate = (ary) => {
  let pays = [];
  let returner = {};
  for (let i = 0; i < ary.length; i++) {
    if (!pays.includes(ary[i].payment_method)) {
      pays.push(ary[i].payment_method);
    }
  }
  for (let i = 0; i < ary.length; i++) {
    if (!returner[pays[i]]) {
      returner[pays[i]] = {
        name: pays[i],
        pushy: []
      };
    }
    if (ary[i].payment_method === returner[pays[i]].name) {
      returner[pays[i]].pushy.push(ary[i]);
    }
  }
  return returner;
};

const idk = segregate(arry)
console.log(idk.)