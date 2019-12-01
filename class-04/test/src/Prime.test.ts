import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';

import {Power} from '../../src/Power';
import {Prime} from '../../src/Prime';
// tslint:disable-next-line:no-unused-expression
describe(`Prime`, () => {
    describe(`ЛОГИКА РАБОТЫ НА ПРОСТЫХ СЛУЧАЯХ`, () => {
        // Первые простые числа: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199
        const argsSimpleSequence: bigint[] = [2n, 3n, 7n, 19n, 37n, 61n, 127n, 271n, 331n, 397n, 547n, 631n, 919n, 1657n, 1801n, 1951n, 2269n, 2437n, 2791n, 3169n, 3571n, 4219n, 4447n, 5167n, 5419n, 6211n, 7057n, 7351n, 8269n, 9241n, 10267n, 11719n, 12097n, 13267n, 13669n, 16651n, 19441n, 19927n, 22447n, 23497n, 24571n, 25117n, 26227n];
        const argsNotSimpleSequence: bigint[] = [4n, 6n, 8n, 9n, 10n, 12n, 14n, 15n, 16n, 18n, 20n, 21n, 22n, 24n, 25n, 26n, 27n, 28n, 30n, 32n, 33n, 34n, 35n, 36n, 38n, 39n, 40n, 42n, 44n, 45n, 46n, 48n, 49n, 50n, 51n, 52n, 54n, 55n, 56n, 57n, 58n, 60n, 62n, 63n, 64n, 65n, 66n, 68n, 69n, 70n, 72n, 74n, 75n, 76n, 77n, 78n, 80n, 81n, 82n, 84n, 85n, 86n, 87n, 88n];
        describe(`метод: перебором(getPrimeByEnumeration)`, () => {
            describe('методы', () => {
                describe('isItPrimeByEnumeration', () => {
                    describe('заведомо простые', () => {
                        argsSimpleSequence.forEach((arg: bigint) => {
                            it(`args:${arg} -> true`, () => {
                                const result = Prime.isItPrimeByEnumeration(arg);
                                expect(result).to.be.true;
                            });
                        });
                    });
                    describe('заведомо не простые', () => {
                        argsNotSimpleSequence.forEach((arg: bigint) => {
                            it(`args:${arg} -> true`, () => {
                                const result = Prime.isItPrimeByEnumeration(arg);
                                expect(result).to.be.false;
                            });
                        });
                    });
                });
                describe('getPrimeByEnumeration', () => {
                    it(`args: 7 -> 3`, () => {
                        const arg: bigint = 7n;
                        const expectedResult: bigint = 4n;
                        const result = Prime.getPrimeByEnumeration(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                    it(`args: 40 -> 12`, () => {
                        const arg: bigint = 40n;
                        const expectedResult: bigint = 12n;
                        const result = Prime.getPrimeByEnumeration(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                    it(`args: 199 -> 46`, () => {
                        const arg: bigint = 199n;
                        const expectedResult: bigint = 46n;
                        const result = Prime.getPrimeByEnumeration(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                });
            });
        });
        describe(`метод: оптимизированным перебором(getPrimeByEnumerationOptimised)`, () => {
            describe('методы', () => {
                describe('isItPrimeByEnumerationOptimised', () => {
                    describe('заведомо простые', () => {
                        argsSimpleSequence.forEach((arg: bigint) => {
                            it(`args:${arg} -> true`, () => {
                                const result = Prime.isItPrimeByEnumerationOptimised(arg);
                                expect(result).to.be.true;
                            });
                        });
                    });
                    describe('заведомо не простые', () => {
                        argsNotSimpleSequence.forEach((arg: bigint) => {
                            it(`args:${arg} -> true`, () => {
                                const result = Prime.isItPrimeByEnumerationOptimised(arg);
                                expect(result).to.be.false;
                            });
                        });
                    });
                });
                describe('getPrimeByEnumerationOptimised', () => {
                    it(`args: 7 -> 3`, () => {
                        const arg: bigint = 7n;
                        const expectedResult: bigint = 4n;
                        const result = Prime.getPrimeByEnumerationOptimised(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                    it(`args: 40 -> 12`, () => {
                        const arg: bigint = 40n;
                        const expectedResult: bigint = 12n;
                        const result = Prime.getPrimeByEnumerationOptimised(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                    it(`args: 199 -> 46`, () => {
                        const arg: bigint = 199n;
                        const expectedResult: bigint = 46n;
                        const result = Prime.getPrimeByEnumerationOptimised(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                });
            });
        });
        describe(`метод: простым Решетом Эрастофена(getPrimeCountBySimpleErastophen)`, () => {
            describe('методы', () => {
                describe('getPrimeCountBySimpleErastophen', () => {
                    it(`args: 7 -> 3`, () => {
                        const arg: bigint = 7n;
                        const expectedResult: bigint = 4n;
                        const result = Prime.getPrimeCountBySimpleErastophen(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                    it(`args: 40 -> 12`, () => {
                        const arg: bigint = 40n;
                        const expectedResult: bigint = 12n;
                        const result = Prime.getPrimeCountBySimpleErastophen(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                    it(`args: 199 -> 46`, () => {
                        const arg: bigint = 199n;
                        const expectedResult: bigint = 46n;
                        const result = Prime.getPrimeCountBySimpleErastophen(arg);
                        expect(result.toString()).to.be.eq(expectedResult.toString());
                    });
                });
            });
        });
    });
});
/*
describe(`ВРЕМЯ`, () => {
    const methods = [
        `powerByIteration`,
        `powerByPowerOfTwoWithMultiplying`,
        `powerByPowerOfTwoWithDecomposition`
    ];
    const argArr = [
        {A: 2n, B: 10n},
        {A: 3n, B: 4n},
        {A: 5n, B: 25n},
        {A: 5n, B: 40n},
        {A: 7n, B: 1000n},
        {A: 19n, B: 1500n},
        {A: 578n, B: 10000n},
        {A: 666n, B: 66666n},
        {A: 6n, B: 666666n},
    ];
    argArr.forEach(arg => {
        const A: bigint = arg.A;
        const B: bigint = arg.B;
        methods.forEach(method => {
            it(`${method} >> args:(${A}, ${B})`, (done) => {
                const timeLabel: string = `${method}-args:(${A}, ${B})`;
                console.time(timeLabel);
                console.log(`Power[${method}](${A}, ${B}): ${(Power[method](A, B) as bigint).toString()}`);
                console.timeEnd(timeLabel);
                done();
            });
        });
    });
});
*/
