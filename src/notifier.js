const Event = {
    System: 'system',
    Tower: 'tower',
};
class EventMessage {
    constructor(from, type, message) {
        this.from = from;
        this.type = type;
        this.message = message;
    }
}
class EventNotifier {
    events = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    }
}

const Notifier = new EventNotifier();
export { Event, Notifier };