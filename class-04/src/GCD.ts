export class GCD {
    public static getGCDBySubtraction (A: bigint, B: bigint): bigint {
        while (A !== B) {
            if (A >= B) {
                A = A - B;
            } else {
                B = B - A;
            }
        }
        return A;
    }

    public static getGCDByModulo (A: bigint, B: bigint): bigint {
        while (A !== 0n && B !== 0n) {
            if (A > B) {
                A = A % B;
            } else {
                B = B % A;
            }
        }
        return A;
    }

    public static getGCDByStein (A: bigint, B: bigint): bigint {
        /* GCD(0,B) == B; GCD(A,0) == A, GCD(0,0) == 0 */
        if (A === 0n) {
            return B;
        }
        if (B === 0n) {
            return A;
        }
        // console.log(`getGCDByStein >> STEP 0: A:${A.toString()}, B:${B.toString()}`);
        /* Let shift := lg K, where K is the greatest power of 2
            dividing both A and B. */
        let sa: bigint = 0n;
        let sb: bigint = 0n;
        while (!(A & 1n)) {
            sa++;
            A >>= 1n;
        }
        while (!(B & 1n)) {
            sb++;
            B >>= 1n;
        }
        let shift: bigint = sa < sb ? sa : sb; // Power part of 2^p Common Divisor
        // console.log(`getGCDByStein >> STEP 2: A:${A.toString()}, B:${B.toString()}`);
        /* From here on, A is always odd. */
        do {
            /* remove all factors of 2 in B -- they are not common */
            /*   note: B is not zero, so while will terminate */
            while ((B & 1n) === 0n) {
                B >>= 1n;
            }
            /* Now A and B are both odd. Swap if necessary so A <= B,
                then set B = B - A (which is even). For bignums, the
                 swapping is just pointer movement, and the subtraction
                  can be done in-place. */
            if (A > B) {
                let t: bigint = B;
                B = A;
                A = t; // Swap A and B.
            }
            B -= A; // Here B >= A.
            // console.log(`getGCDByStein >> STEP 2.1: A:${A}, B:${B}`);
        } while (B !== 0n);
        // console.log(`getGCDByStein >> STEP 3`);
        /* restore common factors of 2 */
        return A << shift;
    }
}
