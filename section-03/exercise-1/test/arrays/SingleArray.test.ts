import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {SingleArray} from '../../src/SingleArray';

describe(`ЛОГИКА РАБОТЫ`, () => {
    describe(`SingleArray`, () => {
        describe('конструктор', () => {
            let singleArray: SingleArray<number> = null;
            it('должен создаваться без ошибок', () => {
                singleArray = new SingleArray<number>();
            });
        });
        describe('методы', () => {
            describe('валидация индекса(считаем что есть во всех методах, куда передается index)', () => {
                const n: number = -500;
                let singleArray: SingleArray<number> = null;
                beforeEach((done) => {
                    singleArray = new SingleArray<number>();
                    done();
                });
                it(`index === null`, () => {
                    const index: number = null;
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                });
                it(`index === undefined`, () => {
                    const index: number = undefined;
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                });
                it(`index as object`, () => {
                    const index: any = {field1: 1};
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                });
                it(`index as array`, () => {
                    const index: any = [1, 2, 3];
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                });
                it(`index as string`, () => {
                    let index: any = 'QWERTY';
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                    index = '1';
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                });
                it(`index as boolean`, () => {
                    let index: any = false;
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                    index = true;
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                });
                it(`index as float`, () => {
                    let index: number = 66.999;
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                    index = 0.3;
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                });
                it(`negative index`, () => {
                    const index: number = -3;
                    expect(() => {
                        singleArray.add(n, index);
                    }).to.be.throw();
                });
            });
            describe('add', () => {
                let singleArray: SingleArray<number> = null;
                beforeEach((done) => {
                    singleArray = new SingleArray<number>();
                    done();
                });
                it(`при пустом массиве добавление одного значения`, () => {
                    const n: number = -500;
                    const index: number = 0;
                    singleArray.add(n, index);
                    expect(singleArray.get(index)).to.be.eq(n);
                });
                it(`при пустом массиве добавление множества значений`, () => {
                    const nArr: number[] = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                    nArr.forEach((n: number, i: number) => {
                        singleArray.add(n, i);
                    });
                    expect(singleArray.get(0)).to.be.eq(0);
                    expect(singleArray.get(9)).to.be.eq(1);
                });
                it(`при пустом массиве добавление серии значений в один и тот же индекс и потом ещё несколько значений`, () => {
                    const n: number = -500;
                    const index: number = 0;
                    singleArray.add(n, index);
                    singleArray.add(n, index);
                    singleArray.add(n, index);
                    expect(singleArray.get(index)).to.be.eq(n);
                    singleArray.add(n + 1, index + 1);
                    singleArray.add(n + 2, index + 2);
                    singleArray.add(n + 3, index + 3);
                    expect(singleArray.get(index + 1)).to.be.eq(n + 1);
                    expect(singleArray.get(index + 2)).to.be.eq(n + 2);
                    expect(singleArray.get(index + 3)).to.be.eq(n + 3);
                });
                it(`добавление в неверный индекс`, () => {
                    const n: number = -500;
                    const index: number = 500;
                    expect(() => { singleArray.add(n, index); }).to.be.throw();
                });
            });
            describe('remove', () => {
                const nArr: number[] = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                let singleArray: SingleArray<number> = null;
                beforeEach((done) => {
                    singleArray = new SingleArray<number>();
                    done();
                });
                it(`при пустом массиве`, () => {
                    const index: number = 0;
                    expect(() => {
                        singleArray.remove(index);
                    }).to.be.throw();
                });
                it(`удаление последнего элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        singleArray.add(n, i);
                    });
                    expect(singleArray.size()).to.be.eq(nArr.length);
                    singleArray.remove(singleArray.size() - 1);
                    expect(singleArray.size()).to.be.eq(nArr.length - 1);
                    expect(singleArray.array).to.be.deep.eq([0, 9, 8, 7, 6, 5, 4, 3, 2]);
                });
                it(`удаление первого элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        singleArray.add(n, i);
                    });
                    expect(singleArray.size()).to.be.eq(nArr.length);
                    singleArray.remove(0);
                    expect(singleArray.size()).to.be.eq(nArr.length - 1);
                    expect(singleArray.array).to.be.deep.eq([9, 8, 7, 6, 5, 4, 3, 2, 1]);
                });
                it(`удаление двух элементов из середины элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        singleArray.add(n, i);
                    });
                    expect(singleArray.size()).to.be.eq(nArr.length);
                    expect(singleArray.remove(4)).to.be.eq(6); // после первого remove, массив уже изменен
                    expect(singleArray.remove(4)).to.be.eq(5);
                    expect(singleArray.size()).to.be.eq(nArr.length - 2);
                    expect(singleArray.array).to.be.deep.eq([0, 9, 8, 7, 4, 3, 2, 1]);
                });
                it(`удаление всех элементов - 1`, (done) => {
                    nArr.forEach((n: number, i: number) => {
                        singleArray.add(n, i);
                    });
                    expect(singleArray.size()).to.be.eq(nArr.length);
                    for (let i: number = singleArray.size() - 1; i >= 0; i--) { // массив мутирует внутри, но size берется толькоодин раз при начале цикла
                        expect(singleArray.remove(i)).to.be.eq(nArr[i]);
                    }
                    expect(singleArray.size()).to.be.eq(0);
                    expect(singleArray.array).to.be.deep.eq([]);
                    done();
                });
                it(`удаление всех элементов - 2`, (done) => {
                    // 1
                    singleArray.add(1, 0);
                    expect(singleArray.remove(0)).to.be.eq(1);
                    expect(singleArray.array).to.be.deep.eq([]);
                    // 2
                    singleArray.add(1, 0);
                    expect(singleArray.remove(0)).to.be.eq(1);
                    expect(singleArray.array).to.be.deep.eq([]);
                    done();
                });
            });
        });
    });
});
