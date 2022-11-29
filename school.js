const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('class started');
        // raise an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'second period',
                text: 'period end',
            });
        }, 2000);
    }
}

module.exports = School;
