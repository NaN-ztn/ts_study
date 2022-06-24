import { Equal } from '@type-challenges/utils';

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;


// 用递归实现遍历数组
// ts 模块规范
// 有 export/import 的话，那么就是模块
// 没有就是全局，可以在别的模块引用
