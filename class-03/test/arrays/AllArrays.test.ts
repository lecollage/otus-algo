import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {SingleArray} from '../../src/SingleArray';
import {VectorArray} from '../../src/VectorArray';
import {FactorArray} from '../../src/FactorArray';
import {MatrixArray} from '../../src/MatrixArray';
import {NOD} from '../../src/NOD';

describe(`ЛОГИКА РАБОТЫ НА ПРОСТЫХ СЛУЧАЯХ`, () => {
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
    describe(`VectorArray`, () => {
        describe('конструктор', () => {
            let vectorArray: VectorArray<number> = null;
            it('должен создаваться без ошибок', () => {
                vectorArray = new VectorArray<number>(10);
            });
        });
        describe('методы', () => {
            describe('add', () => {
                let vectorArray: VectorArray<number> = null;
                beforeEach((done) => {
                    vectorArray = new VectorArray<number>(10);
                    done();
                });
                it(`при пустом массиве добавление одного значения`, () => {
                    const n: number = -500;
                    const index: number = 0;
                    vectorArray.add(n, index);
                    expect(vectorArray.get(index)).to.be.eq(n);
                });
                it(`при пустом массиве добавление множества значений`, () => {
                    // const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, -9, -8, -7, -6, -5, -4, -3, -2, -1];
                    const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    // console.log((vectorArray as any)._array);
                    expect(vectorArray.get(0)).to.be.eq(9);
                    expect(vectorArray.get(8)).to.be.eq(1);
                    expect(() => { vectorArray.get(9); }).to.be.throw;
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                });
                it(`при пустом массиве добавление множества значений по кол-ву больше значения vector`, () => {
                    const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, -9, -8, -7, -6, -5, -4, -3, -2, -1];
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    // console.log((vectorArray as any)._array);
                    expect(vectorArray.get(0)).to.be.eq(9);
                    expect(vectorArray.get(8)).to.be.eq(1);
                    expect(vectorArray.get(9)).to.be.eq(-9);
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                });
            });
            describe('remove', () => {
                const nArr: number[] = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                let vectorArray: VectorArray<number> = null;
                beforeEach((done) => {
                    vectorArray = new VectorArray<number>(10);
                    done();
                });
                it(`при пустом массиве`, () => {
                    const index: number = 0;
                    expect(() => {
                        vectorArray.remove(index);
                    }).to.be.throw();
                });
                it(`удаление последнего элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                    vectorArray.remove(vectorArray.size() - 1);
                    expect(vectorArray.size()).to.be.eq(nArr.length - 1);
                    expect((vectorArray as any)._array).to.be.deep.eq([0, 9, 8, 7, 6, 5, 4, 3, 2]);
                });
                it(`удаление первого элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                    vectorArray.remove(0);
                    expect(vectorArray.size()).to.be.eq(nArr.length - 1);
                    expect((vectorArray as any)._array).to.be.deep.eq([9, 8, 7, 6, 5, 4, 3, 2, 1]);
                });
                it(`удаление двух элементов из середины элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                    expect(vectorArray.remove(4)).to.be.eq(6); // после первого remove, массив уже изменен
                    expect(vectorArray.remove(4)).to.be.eq(5);
                    expect(vectorArray.size()).to.be.eq(nArr.length - 2);
                    expect((vectorArray as any)._array).to.be.deep.eq([0, 9, 8, 7, 4, 3, 2, 1]);
                });
                it(`удаление всех элементов - 1`, (done) => {
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                    for (let i: number = vectorArray.size() - 1; i >= 0; i--) { // массив мутирует внутри, но size берется толькоодин раз при начале цикла
                        expect(vectorArray.remove(i)).to.be.eq(nArr[i]);
                    }
                    expect(vectorArray.size()).to.be.eq(0);
                    expect((vectorArray as any)._array).to.be.deep.eq([]);
                    done();
                });
                it(`удаление всех элементов - 2`, (done) => {
                    // 1
                    vectorArray.add(1, 0);
                    expect(vectorArray.remove(0)).to.be.eq(1);
                    expect((vectorArray as any)._array).to.be.deep.eq([]);
                    // 2
                    vectorArray.add(1, 0);
                    expect(vectorArray.remove(0)).to.be.eq(1);
                    expect((vectorArray as any)._array).to.be.deep.eq([]);
                    done();
                });
            });
        });
    });
    describe(`FactorArray`, () => {
        describe('конструктор', () => {
            let factorArray: FactorArray<number> = null;
            it('должен создаваться без ошибок', () => {
                factorArray = new FactorArray<number>(10);
            });
        });
        describe('методы', () => {
            describe('add', () => {
                let factorArray: FactorArray<number> = null;
                beforeEach((done) => {
                    factorArray = new FactorArray<number>(10);
                    done();
                });
                it(`при пустом массиве добавление одного значения`, () => {
                    const n: number = -500;
                    const index: number = 0;
                    factorArray.add(n, index);
                    expect(factorArray.get(index)).to.be.eq(n);
                });
                it(`при пустом массиве добавление множества значений`, () => {
                    // const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, -9, -8, -7, -6, -5, -4, -3, -2, -1];
                    const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];
                    nArr.forEach((n: number, i: number) => {
                        factorArray.add(n, i);
                    });
                    // console.log((factorArray as any)._array);
                    expect(factorArray.get(0)).to.be.eq(9);
                    expect(factorArray.get(8)).to.be.eq(1);
                    expect(factorArray.get(9)).to.be.undefined;
                    expect(factorArray.size()).to.be.eq(nArr.length);
                });
                it(`при пустом массиве добавление множества значений по кол-ву больше значения vector`, () => {
                    const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, -9, -8, -7, -6, -5, -4, -3, -2, -1];
                    nArr.forEach((n: number, i: number) => {
                        factorArray.add(n, i);
                    });
                    // console.log((factorArray as any)._array);
                    expect(factorArray.get(0)).to.be.eq(9);
                    expect(factorArray.get(8)).to.be.eq(1);
                    expect(factorArray.get(9)).to.be.eq(-9);
                    expect(factorArray.size()).to.be.eq(nArr.length);
                });
            });
            describe('remove', () => {
                const nArr: number[] = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                let vectorArray: VectorArray<number> = null;
                beforeEach((done) => {
                    vectorArray = new VectorArray<number>(10);
                    done();
                });
                it(`при пустом массиве`, () => {
                    const index: number = 0;
                    expect(() => {
                        vectorArray.remove(index);
                    }).to.be.throw();
                });
                it(`удаление последнего элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                    vectorArray.remove(vectorArray.size() - 1);
                    expect(vectorArray.size()).to.be.eq(nArr.length - 1);
                    expect((vectorArray as any)._array).to.be.deep.eq([0, 9, 8, 7, 6, 5, 4, 3, 2]);
                });
                it(`удаление первого элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                    vectorArray.remove(0);
                    expect(vectorArray.size()).to.be.eq(nArr.length - 1);
                    expect((vectorArray as any)._array).to.be.deep.eq([9, 8, 7, 6, 5, 4, 3, 2, 1]);
                });
                it(`удаление двух элементов из середины элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                    expect(vectorArray.remove(4)).to.be.eq(6); // после первого remove, массив уже изменен
                    expect(vectorArray.remove(4)).to.be.eq(5);
                    expect(vectorArray.size()).to.be.eq(nArr.length - 2);
                    expect((vectorArray as any)._array).to.be.deep.eq([0, 9, 8, 7, 4, 3, 2, 1]);
                });
                it(`удаление всех элементов - 1`, (done) => {
                    nArr.forEach((n: number, i: number) => {
                        vectorArray.add(n, i);
                    });
                    expect(vectorArray.size()).to.be.eq(nArr.length);
                    for (let i: number = vectorArray.size() - 1; i >= 0; i--) { // массив мутирует внутри, но size берется толькоодин раз при начале цикла
                        expect(vectorArray.remove(i)).to.be.eq(nArr[i]);
                    }
                    expect(vectorArray.size()).to.be.eq(0);
                    expect((vectorArray as any)._array).to.be.deep.eq([]);
                    done();
                });
                it(`удаление всех элементов - 2`, (done) => {
                    // 1
                    vectorArray.add(1, 0);
                    expect(vectorArray.remove(0)).to.be.eq(1);
                    expect((vectorArray as any)._array).to.be.deep.eq([]);
                    // 2
                    vectorArray.add(1, 0);
                    expect(vectorArray.remove(0)).to.be.eq(1);
                    expect((vectorArray as any)._array).to.be.deep.eq([]);
                    done();
                });
            });
        });
    });
    describe(`MatrixArray`, () => {
        describe('конструктор', () => {
            let matrixArray: MatrixArray<number> = null;
            it('должен создаваться без ошибок', () => {
                matrixArray = new MatrixArray<number>(10);
            });
        });
        describe('методы', () => {
            describe('add', () => {
                let matrixArray: MatrixArray<number> = null;
                beforeEach((done) => {
                    matrixArray = new MatrixArray<number>(10);
                    done();
                });
                it(`при пустом массиве добавление одного значения`, () => {
                    const n: number = -500;
                    const index: number = 0;
                    matrixArray.add(n);
                    expect(matrixArray.get(index)).to.be.eq(n);
                });
                it(`при пустом массиве добавление множества значений`, () => {
                    // const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, -9, -8, -7, -6, -5, -4, -3, -2, -1];
                    const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];
                    nArr.forEach((n: number, i: number) => {
                        matrixArray.add(n);
                    });
                    // console.log((matrixArray as any)._array);
                    expect(matrixArray.get(0)).to.be.eq(9);
                    expect(matrixArray.get(8)).to.be.eq(1);
                    expect(() => { matrixArray.get(9); }).to.be.throw;
                    expect(matrixArray.size()).to.be.eq(nArr.length);
                });
                it(`при пустом массиве добавление множества значений по кол-ву больше значения vector`, () => {
                    const nArr: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, -9, -8, -7, -6, -5, -4, -3, -2, -1];
                    nArr.forEach((n: number, i: number) => {
                        matrixArray.add(n);
                    });
                    // console.log((matrixArray as any)._array);
                    expect(matrixArray.get(0)).to.be.eq(9);
                    expect(matrixArray.get(8)).to.be.eq(1);
                    expect(matrixArray.get(9)).to.be.eq(-9);
                    expect(matrixArray.size()).to.be.eq(nArr.length);
                });
                it(`при пустом массиве добавление множества рандомных значений`, () => {
                    const nArr: number[] = [];
                    let i = 0;
                    for (; i < 100; i++) {
                        const value: number = Math.random();
                        nArr.push(value);
                        matrixArray.add(value);
                    }
                    // console.log((matrixArray as any)._array);
                    expect(matrixArray.get(0)).to.be.eq(nArr[0]);
                    expect(matrixArray.get(30)).to.be.eq(nArr[30]);
                    expect(matrixArray.get(88)).to.be.eq(nArr[88]);
                    expect(matrixArray.get(i - 1)).to.be.eq(nArr[i - 1]);
                    expect(matrixArray.size()).to.be.eq(nArr.length);
                });
            });
            describe('remove', () => {
                const nArr: number[] = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
                let matrixArray: MatrixArray<number> = null;
                beforeEach((done) => {
                    matrixArray = new MatrixArray<number>(5);
                    done();
                });
                it(`при пустом массиве`, () => {
                    const index: number = 0;
                    expect(() => {
                        matrixArray.remove(index);
                    }).to.be.throw();
                });
                it(`удаление последнего элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        matrixArray.add(n);
                    });
                    expect(matrixArray.size()).to.be.eq(nArr.length);
                    matrixArray.remove(matrixArray.size() - 1);
                    expect(matrixArray.size()).to.be.eq(nArr.length - 1);
                    const arr: number[] = [];
                    for (let i: number = 0; i < matrixArray.size(); i++) {
                        arr.push(matrixArray.get(i));
                    }
                    expect(arr).to.be.deep.eq([0, 9, 8, 7, 6, 5, 4, 3, 2]);
                });
                it(`удаление первого элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        matrixArray.add(n);
                    });
                    expect(matrixArray.size()).to.be.eq(nArr.length);
                    matrixArray.remove(0);
                    expect(matrixArray.size()).to.be.eq(nArr.length - 1);
                    const arr: number[] = [];
                    for (let i: number = 0; i < matrixArray.size(); i++) {
                        let item = matrixArray.get(i);
                        // console.log(`matrixArray.get(${i}): ${item}`)
                        arr.push(item);
                    }
                    expect(arr).to.be.deep.eq([9, 8, 7, 6, 5, 4, 3, 2, 1]);
                });
                it(`удаление двух элементов из середины элемента`, () => {
                    nArr.forEach((n: number, i: number) => {
                        matrixArray.add(n);
                    });
                    expect(matrixArray.size()).to.be.eq(nArr.length);
                    expect(matrixArray.remove(4)).to.be.eq(6); // после первого remove, массив уже изменен
                    expect(matrixArray.remove(4)).to.be.eq(5);
                    expect(matrixArray.size()).to.be.eq(nArr.length - 2);
                    const arr: number[] = [];
                    for (let i: number = 0; i < matrixArray.size(); i++) {
                        let item = matrixArray.get(i);
                        // console.log(`matrixArray.get(${i}): ${item}`)
                        arr.push(item);
                    }
                    expect(arr).to.be.deep.eq([0, 9, 8, 7, 4, 3, 2, 1]);
                });
                it(`удаление всех элементов - 1`, (done) => {
                    nArr.forEach((n: number, i: number) => {
                        matrixArray.add(n);
                    });
                    expect(matrixArray.size()).to.be.eq(nArr.length);
                    for (let i: number = matrixArray.size() - 1; i >= 0; i--) { // массив мутирует внутри, но size берется толькоодин раз при начале цикла
                        expect(matrixArray.remove(i)).to.be.eq(nArr[i]);
                    }
                    expect(matrixArray.size()).to.be.eq(0);
                    const arr: number[] = [];
                    for (let i: number = 0; i < matrixArray.size(); i++) {
                        let item = matrixArray.get(i);
                        // console.log(`matrixArray.get(${i}): ${item}`)
                        arr.push(item);
                    }
                    expect(arr).to.be.deep.eq([]);
                    done();
                });
                it(`удаление всех элементов - 2`, (done) => {
                    // 1
                    matrixArray.add(1);
                    expect(matrixArray.remove(0)).to.be.eq(1);
                    let arr: number[] = [];
                    for (let i: number = 0; i < matrixArray.size(); i++) {
                        let item = matrixArray.get(i);
                        // console.log(`matrixArray.get(${i}): ${item}`)
                        arr.push(item);
                    }
                    expect(arr).to.be.deep.eq([]);
                    // 2
                    matrixArray.add(1);
                    expect(matrixArray.remove(0)).to.be.eq(1);
                    arr = [];
                    for (let i: number = 0; i < matrixArray.size(); i++) {
                        let item = matrixArray.get(i);
                        // console.log(`matrixArray.get(${i}): ${item}`)
                        arr.push(item);
                    }
                    expect(arr).to.be.deep.eq([]);
                    done();
                });
            });
        });
    });
});
describe(`ВРЕМЯ`, () => {
    const countOfIteration: number = 100000;
    describe(`SingleArray`, () => {
        let singleArray: SingleArray<number> = new SingleArray<number>();
        it(`add`, (done) => {
            const timeLabel: string = `SingleArray-add-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                singleArray.add(i, i);
            }
            console.timeEnd(timeLabel);
            done();
        });
        it(`get`, (done) => {
            const timeLabel: string = `SingleArray-get-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                singleArray.get(i);
            }
            console.timeEnd(timeLabel);
            done();
        });
        it(`remove`, () => {
            const timeLabel: string = `SingleArray-remove-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                singleArray.remove(0);
            }
            console.timeEnd(timeLabel);
        });
    });
    describe(`VectorArray`, () => {
        let vectorArray: VectorArray<number> = new VectorArray<number>(10);
        it(`add`, (done) => {
            const timeLabel: string = `VectorArray-add-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                vectorArray.add(i, i);
            }
            console.timeEnd(timeLabel);
            done();
        });
        it(`get`, () => {
            const timeLabel: string = `VectorArray-get-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                vectorArray.get(i);
            }
            console.timeEnd(timeLabel);
        });
        it(`remove`, (done) => {
            const timeLabel: string = `VectorArray-remove-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                vectorArray.remove(0);
            }
            console.timeEnd(timeLabel);
            done();
        });
    });
    describe(`FactorArray`, () => {
        let factorArray: FactorArray<number> = new FactorArray<number>(10);
        it(`add`, (done) => {
            const timeLabel: string = `FactorArray-add-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                factorArray.add(i, i);
            }
            console.timeEnd(timeLabel);
            done();
        });
        it(`get`, () => {
            const timeLabel: string = `FactorArray-get-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                factorArray.get(i);
            }
            console.timeEnd(timeLabel);
        });
        it(`remove`, (done) => {
            const timeLabel: string = `FactorArray-remove-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                factorArray.remove(0);
            }
            console.timeEnd(timeLabel);
            done();
        });
    });
    describe(`MatrixArray`, () => {
        let matrixArray: MatrixArray<number> = new MatrixArray<number>(10);
        it(`add`, (done) => {
            const timeLabel: string = `MatrixArray-add-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                matrixArray.add(i);
            }
            console.timeEnd(timeLabel);
            done();
        });
        it(`get`, () => {
            const timeLabel: string = `MatrixArray-get-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                matrixArray.get(i);
            }
            console.timeEnd(timeLabel);
        });
        it(`remove`, (done) => {
            const timeLabel: string = `MatrixArray-remove-${countOfIteration}`;
            console.time(timeLabel);
            for (let i = 0; i < countOfIteration; i++) {
                matrixArray.remove(0);
            }
            console.timeEnd(timeLabel);
            done();
        });
    });
});
