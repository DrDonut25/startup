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
        this.socket.onopen = (event) => {
            this.catchEvent(new EventMessage('Startup', Event.System, { msg: 'connected' }));
        };
        this.socket.onclose = (event) => {
            this.catchEvent(new EventMessage('Startup', Event.System, { msg: 'disconnected' }));
        }
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.catchEvent(event);
            } catch {}
        };
    }

    broadcastEvent(from, type, message) {
        const event = new EventMessage(from, type, message);
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    deleteHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }

    catchEvent(eventMessage) {
        this.events.push(eventMessage);
        this.events.forEach((event) => {
            this.handlers.forEach((handler) => {
                handler(event);
            });
        });
    }
}

const Notifier = new EventNotifier();
export { Event, Notifier };