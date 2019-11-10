import {ArrayI} from './ArrayI';
import {CommonArray} from './CommonArray';

export class VectorArray<T> extends CommonArray<T> implements ArrayI<T> {
    private _array: T[] = [];
    private _vector: number = 0;
    private _size: number = 0;

    private ex$vectorIsIncorrect: string = `Vector is incorrect`;

    constructor (vector: number) {
        super();
        console.log(`VectorArray.constructor >> vector: ${vector}; `);
        if (!this.isVectorValid(vector)) {
            throw new Error(this.ex$vectorIsIncorrect);
        }
        this._vector = vector;
        this._size = 0;
        this._array = new Array(0);
    }

    private isVectorValid (vector: number): boolean {
        return this.isIndexValid(vector);
    }

    public get (index: number): T {
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        return this._array[index];
    }

    public add (value: T, index: number): void {
        console.log(`VectorArray.add >> value: ${value}; index: ${index}`);
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this.size() < index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        if (this.size() === this._array.length) {
            this.resize();
        }
        this._array[index] = value;
        this._size++;
    }

    private resize () {
        let newArray: T[] = new Array(this._array.length + this._vector);
        this._array.forEach((elem: T, index: number) => {
            newArray[index] = elem;
        });
        console.log(`VectorArray.resize >> ...this._array:`, ...this._array, `; newArray: `, newArray);
        this._array = newArray;
    }

    public remove (index: number): T {
        console.log(`VectorArray.remove >> index: ${index}; size: ${this.size()}`);
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this.size() < index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        if (this.size() === 0) {
            throw new Error(this.ex$emptyArray);
        }
        let returnableValue: T = this._array[index];
        return returnableValue;
    }

    public size (): number {
        return this._size;
    }
}
