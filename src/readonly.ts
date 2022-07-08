export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Yuki');
console.log(myVisaCard.owner);
// myVisaCard.owner = "ベーコン";
