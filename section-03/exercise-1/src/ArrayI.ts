export interface ArrayI<T> {
    add (value: T, index: number): void;
    remove (index: number): T;
    size (): number;
}
