import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';

import {Power} from '../src/Power';

describe(`ЛОГИКА РАБОТЫ НА ПРОСТЫХ СЛУЧАЯХ`, () => {
    describe(`Power`, () => {
        describe('методы', () => {
            describe('powerByIteration', () => {
                it(`args:(2, 10) -> 1024`, () => {
                    const A: bigint = 2n;
                    const power: bigint = 10n;
                    const result = Power.powerByIteration(A, power);
                    expect(result.toString()).to.be.eq(1024n.toString());
                });
                it(`args:(3, 4) -> 81`, () => {
                    const A: bigint = 3n;
                    const power: bigint = 4n;
                    const result = Power.powerByIteration(A, power);
                    expect(result.toString()).to.be.eq(81n.toString());
                });
                it(`args:(5, 25) -> 298023223876953125`, () => {
                    const A: bigint = 5n;
                    const power: bigint = 25n;
                    const result = Power.powerByIteration(A, power);
                    const expectedResult: bigint = 298023223876953125n;
                    expect(result.toString()).to.be.eq(expectedResult.toString());
                });
                it(`args:(5, 40) -> 9094947017729282379150390625`, () => {
                    const A: bigint = 5n;
                    const power: bigint = 40n;
                    const result = Power.powerByIteration(A, power);
                    const expectedResult: bigint = 9094947017729282379150390625n;
                    expect(result.toString()).to.be.eq(expectedResult.toString());
                });
            });
        });
    });
});
/*describe(`ВРЕМЯ`, () => {
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
                // GCD[method](A, B);
                console.timeEnd(timeLabel);
                done();
            });
        });
    });
});*/
