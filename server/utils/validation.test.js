const expect = require('expect');

let {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
        let result = isRealString(15);
        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
        let result = isRealString('         ');
        expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        let result = isRealString('     Ebran  ');
        expect(result).toBe(true);
    });
});