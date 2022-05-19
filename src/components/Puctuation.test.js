const PunctuationRemoved = require("./Punctuation")


    describe('removes all Punctuation', () => {
        const items = [
            {
                input:"hello world",
                output:"hello world"
            },
            {
                input:"hello%world",
                output:"hello world"
            },
            {
                input:"!hello world",
                output:" hello world"
            },
            {
                input:";hello world!",
                output:" hello world "
            },
            {
                input:"hello;world",
                output:"hello world"
            },
            {
                input:"hello world?",
                output:"hello world "
            },
            {
                input:"hello world",
                output:"hello world"
            },
        ]

        items.map(tc => {
            it(`returns ${tc.output} when ${tc.input}`, () => {
                const returned = PunctuationRemoved(tc.output);
                const expected = PunctuationRemoved(tc.input)
                expect(returned).toBe(expected)
            })
        })
    })