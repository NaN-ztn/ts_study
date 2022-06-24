type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [key in T[number]]: key;
};

// 返回对象
// keyof array 会得到下标
// 遍历数组方式 [key in T[number]]: key;
// typeof
// as const
// 字面量类型
