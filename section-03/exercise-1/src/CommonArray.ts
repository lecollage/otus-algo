export class CommonArray<T> {
    protected ex$indexIsIncorrect: string = `Index is incorrect`;
    protected ex$indexMoreThanSize: string = `Index is more than size of the array`;
    protected ex$emptyArray: string = `Array is empty`;

    constructor () {
        // do nothing here
    }

    /** Проверит индекс на валидность.
     * Если индекс не integer или он меньше нуля, то кинет exception.
     * @param index
     */
    protected isIndexValid (index: number): boolean {
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
}
