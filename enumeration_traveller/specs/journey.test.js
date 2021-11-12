const Journey = require('../src/journey')

describe('Journey', () => {
    let journey;

    beforeEach(() => {
        journey = new Journey('Edinburgh', 'Glasgow', 'train', 50);
    });

    test('has a start location', () => {
        expect(journey.start).toBe('Edinburgh');
    });

    test('has an end location', () => {
        expect(journey.end).toBe('Glasgow');
    });

    test('has a mode of transport', () => {
        expect(journey.transport).toBe('train');
    });

    test('has a distince in miles', () => {
        expect(journey.distanceMiles).toBe(50);
    });

    

});