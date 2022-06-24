type If<C extends boolean, T, F> = C extends true ? T : F;

// 类型兼容性 | 分配规则
// null 严格模式和非严格模式
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html
