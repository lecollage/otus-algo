export class Prime {
    public static isItPrimeByEnumeration (B: bigint): boolean {
        let simpleFlag: boolean = true;
        if (B > 2n) {
            if (B % 2n === 0n) {
                simpleFlag = false;
            }
            if (simpleFlag) {
                for (let i: bigint = 2n; i < B; i++) {
                    if (B % i === 0n) {
                        simpleFlag = false;
                    }
                }
            }
        } else if (B === 2n) {
            simpleFlag = true;
        } else {
            simpleFlag = false;
        }
        return simpleFlag;
    }

    public static getPrimeByEnumeration (A: bigint): bigint {
        let retunableValue: bigint = 0n;
        if (A) {
            for (let i: bigint = 1n; i <= A; i++) {
                if (Prime.isItPrimeByEnumeration(i)) {
                    // console.log(`SimpleNumber.getSNByEnumeration >> prime: ${i}`);
                    retunableValue++;
                }
            }
        }
        return retunableValue;
    }

    public static isItPrimeByEnumerationOptimised (B: bigint): boolean {
        let simpleFlag: boolean = true;
        if (B > 2n) {
            if (B % 2n === 0n) {
                simpleFlag = false;
            }
            if (simpleFlag) {
                for (let i: bigint = 2n; i * 2n <= B; i++) {
                    if (B % i === 0n) {
                        simpleFlag = false;
                    }
                }
            }
        } else if (B === 2n) {
            simpleFlag = true;
        } else {
            simpleFlag = false;
        }
        return simpleFlag;
    }

    public static getPrimeByEnumerationOptimised (A: bigint): bigint {
        let retunableValue: bigint = 0n;
        if (A) {
            for (let i: bigint = 1n; i <= A; i++) {
                if (Prime.isItPrimeByEnumerationOptimised(i)) {
                    // console.log(`SimpleNumber.getSNByEnumeration >> prime: ${i}`);
                    retunableValue++;
                }
            }
        }
        return retunableValue;
    }

    public static getPrimeCountBySimpleErastophen (A: bigint): bigint {
        let returnableValue: bigint = 0n;
        const boolArray: boolean[] = [];
        for (let i = 1; i <= A; i++) {
            boolArray[i] = true;
        }
        for (let i = 2; i <= boolArray.length; i++) {
            if (boolArray[i]) {
                for (let k = i * i; k <= boolArray.length; k += i) {
                    boolArray[k] = false;
                }
            }
        }
        boolArray.forEach((bool: boolean, index) => {
            // console.log(`SimpleNumber.getSNByEnumeration.boolArray >> index: ${index}; bool: ${bool}`);
            if (index > 1 && bool) {
                returnableValue++;
            }
        });
        return returnableValue;
    }
}
