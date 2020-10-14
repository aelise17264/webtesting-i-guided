const { add, multiply } = require('./calculator.js');

// test away!

describe('calculator.js', () => {

    describe('add()', () => {
        test('add() should add two numbers', () => {
            const sum = add(1, 2);
        
            //assertion
            expect(sum).toBe(3);
            expect(add(2, -2)).toBe(0)
            
        })
        
        it('should return the value if invoked with only one argument', () => {
            expect(add(2)).toBe(2)
            expect(add(0)).toBe(0)
            expect(add(-1)).toBe(-1)
        
        })
        
        it('should return 0 if invoked with no arguments', ()=> {
            expect(add()).toBe(0)
        })
        
        test.todo('passing string')
        test.todo('passing array')
        test.todo('passing object')
        
        
    })
    describe('multiply()', () => {
        it('should multiply 2 numbers together', ()=> {
            expect(multiply(0, 1)).toBe(0)
            expect(multiply(2, 1)).toBe(2)
            expect(multiply(2, 5)).toBe(10)
        })
        it('should return the value if invoked with only one argument', () => {
            expect(multiply(1)).toBe(1)
            expect(multiply(5)).toBe(5)
        })
    }) 
})

//should add 2 numbers

describe('trying out jest', () => {
    it('should compare by reference using toBe', () => {
        expect ({}).not.toBe({})
        //they are 2 empty objects but they are 2 diff objects
        //toBe checks the reference when it comes to objects & arrays
    })
    it('should compare the content', () => {
        expect ({a: 1}).toEqual({a: 1})
    })

    it.only('only run these tests, should compare arrays', () => {
        expect([]).not.toBe([])
        expect([1,2]).toStrictEqual([1, 2])
    })

})

describe('skipping tests', () => {
    it.skip('broken test', () => {
        expect({ a: 1}).not.toEqual({a : 1})
    })
})