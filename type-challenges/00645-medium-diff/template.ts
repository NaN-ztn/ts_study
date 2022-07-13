type NO<O, O1> = Omit<O, keyof O1> & Omit<O1, keyof O>;
type Diff<O, O1> = {
  [K in keyof NO<O, O1>]: NO<O, O1>[K];
};
