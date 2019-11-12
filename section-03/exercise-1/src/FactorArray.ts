import {ArrayI} from './ArrayI';
import {CommonArray} from './CommonArray';

export class FactorArray<T> extends CommonArray<T> implements ArrayI<T> {
    private _array: T[] = [];
    private readonly _factor: number = 0;
    private _size: number = 0;

    private ex$factorIsIncorrect: string = `Factor is incorrect`;

    constructor (factor: number) {
        super();
        // console.log(`FactorArray.constructor >> factor: ${factor}; `);
        if (!this.isFactorValid(factor)) {
            throw new Error(this.ex$factorIsIncorrect);
        }
        this._factor = factor;
        this._size = 0;
        this._array = new Array(0);
    }

    private isFactorValid (factor: number): boolean {
        return this.isIndexValid(factor);
    }

    public get (index: number): T {
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        return this._array[index];
    }

    public add (value: T, index: number): void {
        // console.log(`FactorArray.add >> value: ${value}; index: ${index}`);
        if (!this.isIndexValid(index)) {
            throw new Error(this.ex$indexIsIncorrect);
        }
        if (this._size < index) {
            throw new Error(this.ex$indexMoreThanSize);
        }
        if (this._size === this._array.length) {
            this.resize();
        }
        this._array[index] = value;
        this._size++;
    }

    private resize () {
        const sizeOfNewArray: number = this._array.length + Math.round(this._array.length * this._factor / 100);
        let newArray: T[] = new Array(sizeOfNewArray);
        this._array.forEach((elem: T, index: number) => {
            newArray[index] = elem;
        });
        // console.log(`FactorArray.resize >> ...this._array:`, ...this._array, `; newArray: `, newArray);
        this._array = newArray;
    }

    /** В задании сказано, что стандартные коллекции использовать нельзя. Поэтому все делаем вручную и неоптимально в remove
     *  Здесь лучше использовать стандартные средства для копирования частей массива(slice, например)
     * */
    public remove (index: number): T {
        // console.log(`FactorArray.remove >> index: ${index}; size: ${this._size}`);
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
