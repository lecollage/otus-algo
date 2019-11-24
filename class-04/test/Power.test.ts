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
            describe('powerByPowerOfTwoWithMultiplying', () => {
                it(`args:(2, 10) -> 1024`, () => {
                    const A: bigint = 2n;
                    const power: bigint = 10n;
                    const result = Power.powerByPowerOfTwoWithMultiplying(A, power);
                    expect(result.toString()).to.be.eq(1024n.toString());
                });
                it(`args:(3, 4) -> 81`, () => {
                    const A: bigint = 3n;
                    const power: bigint = 4n;
                    const result = Power.powerByPowerOfTwoWithMultiplying(A, power);
                    expect(result.toString()).to.be.eq(81n.toString());
                });
                it(`args:(5, 25) -> 298023223876953125`, () => {
                    const A: bigint = 5n;
                    const power: bigint = 25n;
                    const result = Power.powerByPowerOfTwoWithMultiplying(A, power);
                    const expectedResult: bigint = 298023223876953125n;
                    expect(result.toString()).to.be.eq(expectedResult.toString());
                });
                it(`args:(5, 40) -> 9094947017729282379150390625`, () => {
                    const A: bigint = 5n;
                    const power: bigint = 40n;
                    const result = Power.powerByPowerOfTwoWithMultiplying(A, power);
                    const expectedResult: bigint = 9094947017729282379150390625n;
                    expect(result.toString()).to.be.eq(expectedResult.toString());
                });
            });
            describe('powerByPowerOfTwoWithDecomposition', () => {
                it(`args:(2, 10) -> 1024`, () => {
                    const A: bigint = 2n;
                    const power: bigint = 10n;
                    const result = Power.powerByPowerOfTwoWithDecomposition(A, power);
                    expect(result.toString()).to.be.eq(1024n.toString());
                });
                it(`args:(3, 4) -> 81`, () => {
                    const A: bigint = 3n;
                    const power: bigint = 4n;
                    const result = Power.powerByPowerOfTwoWithDecomposition(A, power);
                    expect(result.toString()).to.be.eq(81n.toString());
                });
                it(`args:(5, 25) -> 298023223876953125`, () => {
                    const A: bigint = 5n;
                    const power: bigint = 25n;
                    const result = Power.powerByPowerOfTwoWithDecomposition(A, power);
                    const expectedResult: bigint = 298023223876953125n;
                    expect(result.toString()).to.be.eq(expectedResult.toString());
                });
                it(`args:(5, 40) -> 9094947017729282379150390625`, () => {
                    const A: bigint = 5n;
                    const power: bigint = 40n;
                    const result = Power.powerByPowerOfTwoWithDecomposition(A, power);
                    const expectedResult: bigint = 9094947017729282379150390625n;
                    expect(result.toString()).to.be.eq(expectedResult.toString());
                });
            });
        });
    });
});
describe(`ВРЕМЯ`, () => {
    const methods = [
        // `powerByIteration`,
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
        {A: 99999n, B: 999999n},
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
