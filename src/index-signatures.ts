export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Yuki', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Yuki';
profile.age = 26;
profile.nationality = 'Japan';
