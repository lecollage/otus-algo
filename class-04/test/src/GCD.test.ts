import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';

import {GCD} from '../../src/GCD';

describe(`ЛОГИКА РАБОТЫ НА ПРОСТЫХ СЛУЧАЯХ`, () => {
    describe(`GCD`, () => {
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
