export class SingleArray<T> {
    private _array: T[] = [];
    private ex$indexIsIncorrect: string = `Index is incorrect`;
    private ex$indexMoreThanSize: string = `Index is more than size of the array`;
    private ex$emptyArray: string = `Array is empty`;

    constructor () {
        console.log(`SingleArray.constructor >> `);
    }

    public get array (): T[] {
        return this._array;
    }

    /** Проверит индекс на валидность.
     * Если индекс не integer или он меньше нуля, то кинет exception.
     * @param index
     */
    private isIndexValid (index: number): boolean {
        let returnableValue: boolean = true;
        if (index === null || index === undefined) {
            returnableValue = false;
        } else if (!Number.isInteger(index)) {
            returnableValue = false;
        } else if (index < 0) {
            returnableValue = false;
        }
        return returnableValue;
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
