type Permutation<T, T2 = T> = [T] extends [never] ? [] : T2 extends T2 ? [T2, ...Permutation<Exclude<T, T2>>] : never;
