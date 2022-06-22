type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 返回一个对象
// keyof 获取 T 中的 key https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
// forin 遍历 K 中的 key mapped https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// T[P] 进行取值 indexed indexed https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// extends 类型约束，约束题中两个 union 进行约束 https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
