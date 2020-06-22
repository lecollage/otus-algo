import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {HelperUtils, ITextParts} from '../src/HelperUtils';

/*describe(`ЛОГИКА РАБОТЫ НА ПРОСТЫХ СЛУЧАЯХ`, () => {
    // it(`1`, () => {
    //     let arr = [10,20,30,40,15];
    //     expect(QuickSort.partition(arr, 25)).to.be.eq(2);
    //     console.log(`arr: `, arr);
    // });
    // it(`doSiteHasCommonGoods`, () => {
    //     const arr1 = ['A'];
    //     const arr2 = ['B'];
    //     const x = QuickSort.doSiteHasCommonGoods2(arr1, arr2);
    //     console.log(x);
    // });
    it(`getCountOfSameElements`, () => {
        const arr1 = ['X', 'B', 'C'];
        const arr2 = [];
        console.log(QuickSort.getSameElements(arr1, arr2));
    });
    it(`localeCompare`, (done) => {
        let x = [{
            roleId: 'sites.admin-ws'
        }, {
            roleId: 'sales.cashback-admin-ws'
        }, {
            roleId: 'processes.admin-ws'
        }, {
            roleId: 'business.workspace-user'
        }];
        console.log(x[0].roleId.localeCompare(x[1].roleId));
        console.log(x);
        x = x.sort((a, b) => a.roleId.localeCompare(b.roleId))
        console.log(x);
        done();
    });
    it(`|`, (done) => {
        class DraggableDirective {
            id: number | 'delete';
            constructor (A) {
            }
        }
        let A = 0;
        const B = A;
        console.log(B);
        done();
    });
    it(`|| `, () => {
        const x = false || true
        console.log(x);
    });
});
describe(`removeNestedDivsInParagraph`, () => {
    it(`1`, () => {
        const x = {value: 'Ежедневно&nbsp;<div><br></div>'};
        console.log(QuickSort.removeNestedDivsInParagraph(x).value);
    });
});
describe(`getFirstOpenDivInclusion`, () => {
    it(`1`, () => {
        const str: string = 'Ежедневно&nbsp;<div><br></div>';
        const firstDivInclusion = QuickSort.getFirstOpenDivIndex(str);
        expect(firstDivInclusion).eq(15);
    });
    it(`2`, () => {
        const str: string = '';
        const firstDivInclusion = QuickSort.getFirstOpenDivIndex(str);
        expect(firstDivInclusion).eq(-1);
    });
    it(`3`, () => {
        const str: string = '<div><br></div>Ежедневно&nbsp;';
        const firstDivInclusion = QuickSort.getFirstOpenDivIndex(str);
        expect(firstDivInclusion).eq(0);
    });
    it(`4`, () => {
        const str: string = '<br><div><br></div>Ежедневно&nbsp;<div><br></div>';
        const firstDivInclusion = QuickSort.getFirstOpenDivIndex(str);
        expect(firstDivInclusion).eq(4);
    });
    it(`5`, () => {
        const str: string = '<br>Ежедневно&nbsp;<br>';
        const firstDivInclusion = QuickSort.getFirstOpenDivIndex(str);
        expect(firstDivInclusion).eq(-1);
    });
    it(`6`, () => {
        const str: string = '<br>';
        const firstDivInclusion = QuickSort.getFirstOpenDivIndex(str);
        expect(firstDivInclusion).eq(-1);
    });
});
describe(`getFirstCloseDivInclusion`, () => {
    it(`1`, () => {
        const str: string = 'Ежедневно&nbsp;<div><br></div>';
        const firstDivInclusion = QuickSort.getFirstCloseDivIndex(str);
        expect(firstDivInclusion).eq(24);
    });
    it(`2`, () => {
        const str: string = '';
        const firstDivInclusion = QuickSort.getFirstCloseDivIndex(str);
        expect(firstDivInclusion).eq(-1);
    });
    it(`3`, () => {
        const str: string = '<div><br></div>Ежедневно&nbsp;';
        const firstDivInclusion = QuickSort.getFirstCloseDivIndex(str);
        expect(firstDivInclusion).eq(9);
    });
    it(`4`, () => {
        const str: string = '<br><div><br></div>Ежедневно&nbsp;<div><br></div>';
        const firstDivInclusion = QuickSort.getFirstCloseDivIndex(str);
        expect(firstDivInclusion).eq(13);
    });
    it(`5`, () => {
        const str: string = '<br>Ежедневно&nbsp;<br>';
        const firstDivInclusion = QuickSort.getFirstCloseDivIndex(str);
        expect(firstDivInclusion).eq(-1);
    });
    it(`6`, () => {
        const str: string = '<br>';
        const firstDivInclusion = QuickSort.getFirstCloseDivIndex(str);
        expect(firstDivInclusion).eq(-1);
    });
});
describe(`givePartBeforeDiv`, () => {
    it(`1`, () => {
        const str1 = 'Ежедневно&nbsp;';
        const str2 = '<div><br></div>';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartBeforeDiv(str);
        expect(wordParts).deep.eq({word: str1, mainString: str2});
    });
    it(`2`, () => {
        const str1 = '';
        const str2 = '';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartBeforeDiv(str);
        expect(wordParts).deep.eq({word: str1, mainString: str2});
    });
    it(`3`, () => {
        const str1 = '';
        const str2 = '<div><br></div>';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartBeforeDiv(str);
        expect(wordParts).deep.eq({word: str1, mainString: str2});
    });
    it(`4`, () => {
        const str1 = '<br>';
        const str2 = '<div><br></div>';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartBeforeDiv(str);
        expect(wordParts).deep.eq({word: str1, mainString: str2});
    });
    it(`5`, () => {
        const str1 = '<br>';
        const str2 = '';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartBeforeDiv(str);
        expect(wordParts).deep.eq({word: str1, mainString: str2});
    });
});
describe(`getPartInsideDiv`, () => {
    it(`1`, () => {
        const str1 = 'Ежедневно&nbsp;';
        const str2 = '<div><br></div>';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartInsideDiv(str);
        expect(wordParts).deep.eq({word: '<br>', mainString: ''});
    });
    it(`2`, () => {
        const str1 = '';
        const str2 = '';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartInsideDiv(str);
        expect(wordParts).deep.eq({word: '', mainString: ''});
    });
    it(`3`, () => {
        const str1 = '<div><br></div>';
        const str2 = '<div><br></div>';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartInsideDiv(str);
        expect(wordParts).deep.eq({word: '<br>', mainString: str2});
    });
    it(`4`, () => {
        const str1 = '<div><br></div>';
        const str2 = '<br>';
        const str: string = str1 + str2;
        const wordParts: WordPartsI = QuickSort.getPartInsideDiv(str);
        expect(wordParts).deep.eq({word: '<br>', mainString: str2});
    });
    it(`5`, () => {
        const str = 'Ежедневно&nbsp;<div><b><i><br></i></b></div><div><br></div>';
        const wordParts: WordPartsI = QuickSort.getPartInsideDiv(str);
        expect(wordParts).deep.eq({word: '<b><i><br></i></b>', mainString: '<div><br></div>'});
    });
    it(`6`, () => {
        const str = '<div><b><i><br></i></b></div><div><br></div>';
        const wordParts: WordPartsI = QuickSort.getPartInsideDiv(str);
        expect(wordParts).deep.eq({word: '<b><i><br></i></b>', mainString: '<div><br></div>'});
    });
    it(`7`, () => {
        const str = '<div><b><i><br></i></b></div><div><br></div>';
        const wordParts: WordPartsI = QuickSort.getPartInsideDiv(str);
        expect(wordParts).deep.eq({word: '<b><i><br></i></b>', mainString: '<div><br></div>'});
    });
});*/
describe(`removeNestedDivsInParagraph`, () => {
    it(`1`, (done) => {
        const str1 = 'Ежедневно&nbsp;';
        const str2 = '<div><br></div>';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        expect(textValue).eq('Ежедневно&nbsp;<br><br>');
        done();
    });
    it(`2`, () => {
        const str1 = 'Ежедневно&nbsp;';
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        expect(textValue).eq('Ежедневно&nbsp;');
    });
    it(`3`, () => {
        const str1 = '';
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        expect(textValue).eq('');
    });
    it(`4`, () => {
        const str1 = `Ежедневно&nbsp;<div><b><i><br></i></b></div><div><br></div>Ежедневно&nbsp;<div>Ежедневно&nbsp;<b><i><br></i></b></div>Ежедневно&nbsp;`;
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        expect(textValue).eq('Ежедневно&nbsp;<br><b><i><br></i></b><br>Ежедневно&nbsp;<br>Ежедневно&nbsp;<b><i><br></i></b>Ежедневно&nbsp;');
    });
    it(`5`, () => {
        const str1 = `<div><b><i>Ежедневно&nbsp;<br></i></b></div><div><br></div>Ежедневно&nbsp;`;
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        expect(textValue).eq('<b><i>Ежедневно&nbsp;<br></i></b><br>Ежедневно&nbsp;');
    });
    it(`6`, () => {
        const str1 = `<div><br></div><div><br></div>Ежедневно&nbsp;<div>Ежедневно <br></div><div>Ежедневно <br></div><div>Ежедневно <br></div><div><br></div><div>Ежедневно <br></div><div><br></div><div><br></div><div>Ежедневно <br></div><div><br></div><div><br></div><div>Ежедневно <br></div>`;
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        // expect(textValue).deep.eq({value: '<b><i>Ежедневно&nbsp;<br></i></b><br>Ежедневно&nbsp;'});
        console.log(textValue);
    });
    it(`7`, () => {
        const str1 = `<b><i><u><strike>Заголовок&nbsp;</strike></u></i></b><div><b><br></b></div><div><b><br></b></div><div><b><br></b></div><div><b>письма2</b></div><div><b>Заголовок <br></b></div><div><b><br></b></div><div><b>Заголовок <br></b></div><div><b>письма<br></b></div><div><b>письма<br></b></div><div><b><br></b></div><div><b>письма<br></b></div>`;
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        // expect(textValue).deep.eq({value: '<b><i>Ежедневно&nbsp;<br></i></b><br>Ежедневно&nbsp;'});
        console.log(textValue);
    });
    it(`8`, () => {
        const str1 = `<b><i><u><strike>Заголовок&nbsp;</strike></u></i></b><div><b><br></b></div><div><b><br></b></div><div><b><br></b></div><div><b>письма2</b></div><div><b>Заголовок <br></b></div>`;
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        // expect(textValue).deep.eq({value: '<b><i>Ежедневно&nbsp;<br></i></b><br>Ежедневно&nbsp;'});
        console.log(textValue);
    });
    it(`9`, () => {
        const str1 = `<div><br></div><div><br></div><div><br></div>Ежедневно&nbsp;<div><br></div><div><br></div><div><br><div>Ежедневно <br></div><div>Ежедневно <br></div><div>Ежедневно <br></div><div>Ежедневно <br></div><div><br></div><div><br></div><div><br></div></div>`;
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        // expect(textValue).deep.eq({value: '<b><i>Ежедневно&nbsp;<br></i></b><br>Ежедневно&nbsp;'});
        console.log(textValue);
    });
    it(`Пустой <div></div>`, () => {
        const str1 = `<div></div>`;
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        expect(textValue).deep.eq('<br>');
    });
    it(`Строка с пустым <div></div>`, () => {
        console.log(`textValue 1`);
        const str1 = `sdf<div></div>xyz<div></div>`;
        const str2 = '';
        const value: string = str1 + str2;
        const textValue = HelperUtils.removeNestedDivsInParagraph(value);
        // expect(textValue).deep.eq(`<br><br>asdasdasd`);
        console.log(textValue);
    });
});
