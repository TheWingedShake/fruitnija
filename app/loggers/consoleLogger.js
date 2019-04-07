class ConsoleLogger{

    constructor(){
        
    }

    log(message = ''){
        console.log(message);
    }

    warn(message = ''){
        console.warn(message);
    }

    error(message = ''){
        console.error(message);
    }

}

export { ConsoleLogger };