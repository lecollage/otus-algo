export class NOD {
    // constructor () {}
    // public static getNOD (A: number, B: number) {
    //     while (A !== B) {
    //         if (A > B) {
    //             A -= B;
    //         } else {
    //             B -= A;
    //         }
    //     }
    //     return A;
    // }

    public static power (A: number, pow: number) {
        let value: number = 1;
        if (pow > 0) {
            value = A;
            while (pow--) {
                value = A * pow;
            }
        }
        return value;
    }

    public static primeCount (A: number): boolean {
        let c: number = 0;
        for (let i = 1; i <= A; i++) {
            if (A % i === 0) {
                c++;
            }
        }
        return c === 2;
    }
    /*
describe(`prime`, () => {
    it(`run`, (done) => {
        let c: number = 0;
        for (let i = 1; i <= 100000; i++) {
            if (NOD.primeCount(i)) {
                c++;
            }
        }
        console.log(`c: ${c}`);
        done();
    });
});
*/
}
