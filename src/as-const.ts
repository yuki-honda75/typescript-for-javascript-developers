export {};

let name = 'Atsushi';

name = 'Yuki';

let nickname = 'Yuki' as const;
nickname = 'Yuki';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// profile.name = "Yuki";
// profile.height = 180;
