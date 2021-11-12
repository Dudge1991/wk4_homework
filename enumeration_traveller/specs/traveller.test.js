const Traveller = require('../src/traveller');
const Journey = require('../src/journey');

describe ('Traveller', () => {
    let traveller;
    let journey1;
    let journey2;
    let journey3;
    let journey4;
    let journey5;

    beforeEach(() => {
        traveller = new Traveller();
        journey1 = new Journey('Edinburgh', 'Glasgow', 'train', 50);
        journey2 = new Journey('Edinburgh', 'Aberdeen', 'train', 100);
        journey3 = new Journey('Edinburgh', 'Dalkeith', 'car', 10);
        journey4 = new Journey('Glasgow', 'London', 'car', 500);
        journey5 = new Journey('London', 'New York', 'plane', 1500);
    })

    test('to have an array of journeys', () => {
        expect(traveller.journeys).toEqual([]);
    });

    test('to have a collection of journeys', () => {
        traveller.addJourney(journey1);
        traveller.addJourney(journey2);

        expect(traveller.journeys.length).toBeGreaterThanOrEqual(1);
    });

    test('get journey start locations', () => {
        const start = traveller.startLocation(journey1);

        expect(start).toEqual('Edinburgh');
    })

    test('get list of starting locations for journeys', () => {
        traveller.addJourney(journey1);
        traveller.addJourney(journey2);
        traveller.addJourney(journey3);

        expect(traveller.startLocationList()).toEqual([journey1.start, journey2.start, journey3.start]);
    })

    test('get journey end locations', () => {
        const end = traveller.endLocation(journey1);
        expect(end).toEqual('Glasgow');
    })

    test('get list of ending locations for journeys', () => {
        traveller.addJourney(journey1);
        traveller.addJourney(journey2);
        traveller.addJourney(journey3);

        expect(traveller.endLocationList()).toEqual([journey1.end, journey2.end, journey3.end]);
    })

    test('get journeys by transport', () => {
        traveller.addJourney(journey1);
        traveller.addJourney(journey2);
        traveller.addJourney(journey3);

        expect(traveller.getJourneysByTransport('train')).toEqual([journey1, journey2]);
    });

    test('get journeys over 50 miles', () => {
        traveller.addJourney(journey1);
        traveller.addJourney(journey2);
        traveller.addJourney(journey3);
        traveller.addJourney(journey4);
        traveller.addJourney(journey5);

        expect(traveller.getJourneysByMinDistance(50)).toEqual([journey1, journey2, journey4, journey5]);
    });

    test('get total distance travelled', () => {
        traveller.addJourney(journey2);
        traveller.addJourney(journey4);
        traveller.addJourney(journey5);

        expect(traveller.totalDistanceTravelled()).toBe(2100);
    });

    test('get a unique list of modes of transport', () => {
        traveller.addJourney(journey1);
        traveller.addJourney(journey2);
        traveller.addJourney(journey3);
        traveller.addJourney(journey4);
        traveller.addJourney(journey5);

        expect(traveller.getModesOfTransportUsed()).toEqual(['train', 'car', 'plane']);
    });

});