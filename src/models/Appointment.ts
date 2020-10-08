import { uuid } from 'uuidv4'

class Appointment {
    id: string;

    service: string;
    
    date: Date;

    constructor(service: string, date: Date){
        this.id = uuid();
        this.service = service;
        this.date = date;
    }
}

export default Appointment;