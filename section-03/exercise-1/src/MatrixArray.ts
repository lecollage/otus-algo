import {ArrayI} from './ArrayI';
import {CommonArray} from './CommonArray';
import {SingleArray} from './SingleArray';
import {VectorArray} from './VectorArray';

export class MatrixArray<T> extends CommonArray<T> implements ArrayI<T> {
    private _array: ArrayI<ArrayI<T>> = null;
    private readonly _vector: number = 0;
    private _size: number = 0;

    private ex$vectorIsIncorrect: string = `Vector is incorrect`;

    constructor (vector: number) {
        super();
        // console.log(`MatrixArray.constructor >> vector: ${vector}; `);
        if (!this.isVectorValid(vector)) {
            throw new Error(this.ex$vectorIsIncorrect);
        }
        this._vector = vector;
        this._size = 0;
        this._array = new SingleArray<VectorArray<T>>();
    }

    private isVectorValid (vector: number): boolean {
        return this.isIndexValid(vector);
    }

    public get (index: number): T {
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        let relatedIndex: number = index;
        let i: number = 0;
        let vectorArray: VectorArray<T> = this._array.get(i) as VectorArray<T>;
        while (relatedIndex > 0) {
            relatedIndex = relatedIndex - vectorArray.size();
            if (relatedIndex >= 0) {
                i++;
                vectorArray = this._array.get(i) as VectorArray<T>;
            }
        }
        // console.log(`MatrixArray.get >> relatedIndex BEFORE: ${relatedIndex}; i: ${i}`);
        if (relatedIndex < 0) {
            relatedIndex = relatedIndex + vectorArray.size();
        }
        // console.log(`MatrixArray.get >> relatedIndex AFTER: ${relatedIndex}; `);
        const returnableValue: T = vectorArray.get(relatedIndex);
        // console.log(`MatrixArray.get >> returnableValue: ${returnableValue}`);
        return returnableValue;
    }

    public add (value: T): void {
        if (this._size === this._array.size() * this._vector) {
            this._array.add(new VectorArray<T>(this._vector), this._array.size());
        }
        const indexForGettingSingleArray: number = Math.trunc(this._size / this._vector);
        const vectorArray = this._array.get(indexForGettingSingleArray);
        // console.log(`MatrixArray.add >> value: ${value}; indexForGettingSingleArray: ${indexForGettingSingleArray}; vectorArray: `, vectorArray);
        vectorArray.add(value, vectorArray.size());
        this._size++;
    }

    public remove (index: number): T {
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this.size() < index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        if (this.size() === 0) {
            throw new Error(this.ex$emptyArray);
        }
        let relatedIndex: number = index;
        let i: number = 0;
        let vectorArray: VectorArray<T> = this._array.get(i) as VectorArray<T>;
        while (relatedIndex > 0) {
            relatedIndex = relatedIndex - vectorArray.size();
            if (relatedIndex >= 0) {
                i++;
                vectorArray = this._array.get(i) as VectorArray<T>;
            }
        }
        if (relatedIndex < 0) {
            relatedIndex = relatedIndex + vectorArray.size();
        }
        const returnableValue: T = vectorArray.remove(relatedIndex);
        if (vectorArray.size() === 0) {
            this._array.remove(i);
        }
        this._size--;
        return returnableValue;
    }

    public size (): number {
        return this._size;
    }
}
