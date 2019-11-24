export class Power {
    public static powerByIteration (A: bigint, power: bigint): bigint {
        let retunableValue: bigint = 1n;
        if (power !== 0n) {
            const multiplier: bigint = A;
            retunableValue = A;
            while (power !== 1n) {
                retunableValue *= multiplier;
                power -= 1n;
            }
        }
        return retunableValue;
    }

    public static powerByPowerOfTwoWithMultiplying (A: bigint, power: bigint): bigint {
        let returnableValue: bigint = A;
        let k: bigint = 1n;
        for (; k < (power / 2n); k *= 2n) {
            returnableValue *= returnableValue;
            // console.log(`A: ${A}; power: ${power}; k: ${k}; returnableValue: ${returnableValue}`);
        }
        for (; k < power; k++) {
            returnableValue *= A;
            // console.log(`A: ${A}; power: ${power}; k: ${k}; returnableValue: ${returnableValue}`);
        }
        return returnableValue;
    }

    public static powerByPowerOfTwoWithDecomposition (A: bigint, power: bigint): bigint {
        let res: bigint = 1n;
        while (power > 1n) {
            if (power % 2n === 1n) {
                res *= A;
            }
            A *= A;
            power /= 2n;
        }
        if (power > 0n) {
            res *= A;
        }
        return res;
    }
}
