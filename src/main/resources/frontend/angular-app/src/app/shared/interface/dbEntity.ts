interface DbEntity<T> {
  buildNewObject(): T;
  toRow();
  fromRow();
}
