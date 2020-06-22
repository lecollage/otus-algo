export interface ITextParts {
    textPart: string;
    mainText: string;
}

export class HelperUtils {
    public static partition (originArray: number[], pivot: number): number {
        let returnableIndex: number = 0;
        const arr1: number[] = [];
        const arr2: number[] = [];
        originArray.forEach((el: number) => {
            if (el <= pivot) {
                arr1.push(el);
            } else {
                arr2.push(el);
            }
        });
        returnableIndex = arr1.length - 1;
        console.log(arr1, arr2, returnableIndex);
        arr1.forEach(x => {
            originArray.pop();
        });
        arr2.forEach(x => {
            originArray.pop();
        });
        // arr1.push(...arr2);
        originArray.push(...arr1, ...arr2);
        return returnableIndex;
    }

    public static doSiteHasCommonGoods (mainSiteGoodIds: string[], relatedSiteGoodIds: string[]): boolean {
        for (let i: number = 0; i < mainSiteGoodIds.length; i++) {
            console.log(`another step`);
            if (relatedSiteGoodIds.includes(mainSiteGoodIds[i])) {
                console.log(`step right before return`);
                return true;
            }
        }

        return false;
    }

    public static doSiteHasCommonGoods2 (mainSiteGoodIds: string[], relatedSiteGoodIds: string[]): boolean {
        return mainSiteGoodIds.some((mainSiteGoodId: string) => relatedSiteGoodIds.includes(mainSiteGoodId));
    }

    public static getSameElements (mainSiteGoodIds: string[], relatedSiteGoodIds: string[]): string[] {
        return mainSiteGoodIds.filter((v: string) => {
            console.log(`v: ${v}`);
            return relatedSiteGoodIds.indexOf(v) !== -1;
        });
    }

    ///////////////////////////////////////////////////////////////////////
    private static readonly DIV_OPEN = '<div>';
    private static readonly DIV_CLOSE = '</div>';
    private static readonly BR = '<br>';

    private static getFirstOpenDivIndex (mainString: string): number {
        console.log(`getFirstOpenDivIndex >> mainString:`, mainString);
        return mainString.indexOf(this.DIV_OPEN, 0);
    }

    private static getFirstCloseDivIndex (mainString: string): number {
        return mainString.indexOf(this.DIV_CLOSE, 0);
    }

    private static getPartBeforeDiv (mainString: string): ITextParts {
        let currentTextPart = '';
        let newMainText = '';

        if (!mainString) {
            return {textPart: '', mainText: ''};
        }

        const firstOpenDivIndex = HelperUtils.getFirstOpenDivIndex(mainString);

        if (firstOpenDivIndex > -1) {
            currentTextPart = mainString.slice(0, firstOpenDivIndex);
            newMainText = mainString.slice(firstOpenDivIndex, mainString.length);
        } else {
            currentTextPart = mainString.slice(0, mainString.length);
        }

        return {textPart: currentTextPart, mainText: newMainText};
    }

    private static getPartInsideDiv (mainString: string): ITextParts {
        let currentTextPart = '';
        let newMainText = '';

        if (!mainString) {
            return {textPart: '', mainText: ''};
        }

        const firstOpenDivIndex = HelperUtils.getFirstOpenDivIndex(mainString);
        const firstCloseDivIndex = HelperUtils.getFirstCloseDivIndex(mainString);

        if (firstOpenDivIndex > -1) {
            currentTextPart = mainString.slice(firstOpenDivIndex + this.DIV_OPEN.length, firstCloseDivIndex);
            newMainText = mainString.slice(firstCloseDivIndex + this.DIV_CLOSE.length, mainString.length);
        } else {
            currentTextPart = mainString.slice(0, mainString.length);
        }

        console.log({textPart: currentTextPart, mainText: newMainText});

        return {textPart: currentTextPart, mainText: newMainText};
    }

    public static removeNestedDivsInParagraph (mainText: string): string {
        let str = mainText
            .replace(/(\r\n)|\r|\n/g, '\n')
            .replace(new RegExp(`${this.DIV_OPEN}${this.DIV_CLOSE}`, 'g'), this.BR);
        const firstOpenDivIndex = HelperUtils.getFirstOpenDivIndex(str);

        console.log(`removeNestedDivsInParagraph >> firstOpenDivIndex:`, firstOpenDivIndex);

        if (firstOpenDivIndex < 0) {
            return str;
        }

        let accumulator = '';
        let checkedStr;

        while (str && checkedStr !== str) {
            if (checkedStr === str) {
                accumulator += str;

                break;
            }

            checkedStr = str;

            const partBeforeDiv = HelperUtils.getPartBeforeDiv(str);

            console.log(`removeNestedDivsInParagraph >> STEP 1. partBeforeDiv:`, partBeforeDiv);

            if (partBeforeDiv.textPart) {
                accumulator += partBeforeDiv.textPart;
                str = partBeforeDiv.mainText;
            }

            const partInsideDiv: ITextParts = HelperUtils.getPartInsideDiv(str);

            console.log(`removeNestedDivsInParagraph >> STEP 2. partInsideDiv:`, partInsideDiv);

            if (partInsideDiv.textPart) {
                accumulator += partBeforeDiv.textPart ? this.BR : '';
                accumulator += partInsideDiv.textPart;
                accumulator += partInsideDiv.textPart.includes(this.BR) ? '' : this.BR;
                str = partInsideDiv.mainText;
            }
        }

        return accumulator;
    }
}
