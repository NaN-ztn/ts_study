type createLenthArr<length, arr extends number[] = []> = length extends arr['length']
  ? arr
  : createLenthArr<length, [...arr, arr['length']]>;
type MinusOne<T extends number> = createLenthArr<T> extends [...infer Rest, infer Last] ? Last : never;
