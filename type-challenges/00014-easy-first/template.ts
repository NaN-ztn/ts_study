// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

// 空数组首元素为 undefindes
// entends 进行条件判断
// length 判断 indexed
// array[number] 得到 union 通过条件约束看是否有值，若 array 为空则 array[number] 为 never
// infer 推断
