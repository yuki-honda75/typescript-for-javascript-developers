export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Yuki',
  age: 26,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const firend: PersonalDataType = {
  name: 'Yo',
  age: 27,
};

// firend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;