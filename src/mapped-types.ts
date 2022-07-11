export {};

type Profile = {
  name: string;
  age: number;
};

type ParatialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;
