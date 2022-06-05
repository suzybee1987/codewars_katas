function greetingService(name) {
    return {
        sayHi() {
            console.log('Hello ' + name + '!');
        },
        sayBye() {
            console.log('Goodbye ' + name + '!');
        }
    }
}

var gs = greetingService('Jon');

gs.sayHi();
gs.sayBye();