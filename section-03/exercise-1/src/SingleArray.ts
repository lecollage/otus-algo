import {ArrayI} from './ArrayI';
import {CommonArray} from './CommonArray';

export class SingleArray<T> extends CommonArray<T> implements ArrayI<T> {
    private _array: T[] = [];

    constructor () {
        super();
        console.log(`SingleArray.constructor >> `);
    }

    public get array (): T[] {
        return this._array;
    }

    public get (index: number): T {
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        return this._array[index];
    }

    public add (value: T, index: number): void {
        console.log(`SingleArray.add >> value: ${value}; index: ${index}`);
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this.size() < index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        this._array[index] = value;
    }

    public remove (index: number): T {
        console.log(`SingleArray.remove >> index: ${index}; size: ${this.size()}`);
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this.size() < index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        if (this.size() === 0) {
            throw new Error(this.ex$emptyArray);
        }
        const arrayWithoutRemovableItem: T[] = [];
        let i: number = 0;
        let returnableValue: T = this._array[index];
        while (i < index) {
            arrayWithoutRemovableItem[i] = this._array[i];
            i++;
        }
        i++;
        while (i < this.size()) {
            arrayWithoutRemovableItem[i - 1] = this._array[i];
            i++;
        }
        this._array = arrayWithoutRemovableItem;
        return returnableValue;
    }

    public size (): number {
        return this._array.length;
    }
}
