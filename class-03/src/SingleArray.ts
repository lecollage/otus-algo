import {ArrayI} from './ArrayI';
import {CommonArray} from './CommonArray';

export class SingleArray<T> extends CommonArray<T> implements ArrayI<T> {
    private _array: T[] = [];
    private _size: number = 0;

    constructor () {
        super();
        this._size = 0;
    }

    public get array (): T[] {
        return this._array;
    }

    public get (index: number): T {
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this._size <= index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        // console.log(`SingleArray.add >> this._array:`, this._array, `; index: ${index}`);
        // console.log(`SingleArray.get >> index: ${index}`);
        return this._array[index];
    }

    public add (value: T, index: number): void {
        // console.log(`SingleArray.add >> value: ${value}; index: ${index}`);
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this._size < index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        this._size++;
        this._array[index] = value;
    }

    /** В задании сказано, что стандартные коллекции использовать нельзя. Поэтому все делаем вручную и неоптимально в remove
     *  Здесь лучше использовать стандартные средства для копирования частей массива(slice, например)
     * */
    public remove (index: number): T {
        // console.log(`SingleArray.remove >> index: ${index}; size: ${this.size()}`);
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this._size < index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        if (this._size === 0) {
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
        while (i < this._size) {
            arrayWithoutRemovableItem[i - 1] = this._array[i];
            i++;
        }
        this._array = arrayWithoutRemovableItem;
        this._size--;
        return returnableValue;
    }

    public size (): number {
        return this._size;
    }
}
