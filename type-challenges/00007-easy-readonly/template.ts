type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

// 返回一个对象
// 遍历 key
// 加上 readonly

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
