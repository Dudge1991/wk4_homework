class Traveller{
    constructor(){
        this.journeys = [];
    }

    addJourney(trip){
        this.journeys.push(trip);
    }

    startLocation(trip){
        return trip.start;
    }

    startLocationList(){
        return this.journeys.map(journey => journey.start);
    }

    endLocation(trip){
        return trip.end;
    }

    endLocationList(){
        return this.journeys.map(journey => journey.end);
    }

    getJourneysByTransport(transport){
        return this.journeys.filter(journey => journey.transport === transport);
    }

    getJourneysByMinDistance(distance){
        return this.journeys.filter(journey => journey.distanceMiles >= distance);
    }

    totalDistanceTravelled(){
        return this.journeys.map(journey => journey.distanceMiles).reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    getModesOfTransportUsed(){
        return Array.from(new Set(this.journeys.map(journey => journey.transport)));
    }

}



module.exports = Traveller;