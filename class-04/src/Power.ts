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
}
