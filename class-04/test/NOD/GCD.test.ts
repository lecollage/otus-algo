import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';

import {GCD} from '../../src/GCD';

describe(`ЛОГИКА РАБОТЫ НА ПРОСТЫХ СЛУЧАЯХ`, () => {
    describe(`NOD`, () => {
        describe('методы', () => {
            describe('getGCDBySubstraction', () => {
                it(`args:(125, 15) -> NOD:5`, () => {
                    const A: bigint = 125n;
                    const B: bigint = 15n;
                    const result = GCD.getGCDBySubtraction(A, B);
                    expect(result.toString()).to.be.eq(5n.toString());
                    expect(result.toString()).to.not.be.eq(3n.toString());
                });
                it(`args:(1234567890, 12) -> NOD:6`, () => {
                    const A: bigint = 1234567890n;
                    const B: bigint = 12n;
                    const result = GCD.getGCDBySubtraction(A, B);
                    expect(result.toString()).to.be.eq(6n.toString());
                    expect(result.toString()).to.not.be.eq(3n.toString());
                });
            });
            describe('getGCDByModulo', () => {
                it(`args:(125, 15) -> NOD:5`, () => {
                    const A: bigint = 125n;
                    const B: bigint = 15n;
                    const result = GCD.getGCDByModulo(A, B);
                    expect(result.toString()).to.be.eq(5n.toString());
                    expect(result.toString()).to.not.be.eq(3n.toString());
                });
                it(`args:(1234567890, 12) -> NOD:6`, () => {
                    const A: bigint = 1234567890n;
                    const B: bigint = 12n;
                    const result = GCD.getGCDByModulo(A, B);
                    expect(result.toString()).to.be.eq(6n.toString());
                    expect(result.toString()).to.not.be.eq(3n.toString());
                });
            });
            describe('getGCDByStein', () => {
                it(`args:(125, 15) -> NOD:5`, () => {
                    const A: bigint = 125n;
                    const B: bigint = 15n;
                    const result = GCD.getGCDByStein(A, B);
                    expect(result.toString()).to.be.eq(5n.toString());
                    expect(result.toString()).to.not.be.eq(3n.toString());
                });
                it(`args:(1234567890, 12) -> NOD:6`, () => {
                    const A: bigint = 1234567890n;
                    const B: bigint = 12n;
                    const result = GCD.getGCDByStein(A, B);
                    expect(result.toString()).to.be.eq(6n.toString());
                    expect(result.toString()).to.not.be.eq(3n.toString());
                });
                it(`args:(123456789000, 1200) -> NOD:600`, () => {
                    const A: bigint = 123456789000n;
                    const B: bigint = 1200n;
                    const result: bigint = GCD.getGCDByStein(A, B);
                    expect(result.toString()).to.be.eq(600n.toString());
                    expect(result.toString()).to.not.be.eq(3n.toString());
                });
            });
        });
    });
});
/*describe(`TEST`, () => {
    it(`неверное выполнение getGCDByStein для (12345678900, 1200)`, (done) => {
        // 625499948160‬
        // 12345678900
        let A: bigint = 399713089n;
        let B: bigint = 150n;
        console.log(399713089n | 150n);
        console.log((399713089n | 150n) & 1n);

        console.log(123456789000n | 1200n);
        console.log((123456789000n | 1200n).toString(2));
        console.log((1).toString(2));
        console.log(((123456789000n | 1200n) & 1n).toString(2));

        // getGCDByStein >> STEP 0.1: A:-548631292, B:600, shift:1
        // getGCDByStein >> STEP 0.1: A:-274315646, B:300, shift:2
        // getGCDByStein >> STEP 0.1: A:-137157823, B:150, shift:3

        A = 12345678900n;
        A >>= 1n; // 1877872154
                  // 1877872154
        // 123.456.789.000
        // 002.147.483.648
        // 002.147.483.647
        // 9.007.199.254.740.992
        console.log(A);
        A >>= 1n;
        console.log(A);
        console.log(Number.MAX_VALUE);
        let testA = 900719925474099000000000000;
        console.log(testA);
        testA += 100000000000000000000000;
        console.log(testA);
        testA >>>= 1;
        console.log(testA);
        done();
    });
});*/
describe(`ВРЕМЯ`, () => {
    const methods = [
        `getGCDBySubtraction`,
        `getGCDByModulo`,
        `getGCDByStein`
    ];
    const argArr = [
        {A: 1234567890n, B: 12n},
        {A: 12345678900n, B: 12n},
        {A: 123456789000n, B: 1200n}
        // {A: 9007199254740992, B: 12}
    ];
    argArr.forEach(arg => {
        const A: bigint = arg.A;
        const B: bigint = arg.B;
        methods.forEach(method => {
            it(`${method} >> args:(${A}, ${B})`, (done) => {
                const timeLabel: string = `${method}-args:(${A}, ${B})`;
                console.time(timeLabel);
                GCD[method](A, B);
                console.timeEnd(timeLabel);
                done();
            });
        });
    });
});
