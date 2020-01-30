interface DbEntity<T> {
  buildNewObject(): T;
  setId(num: number);
}
