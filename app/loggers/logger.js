import { ConsoleLogger } from './consoleLogger';
class Logger{

    constructor(loggerType){
        switch(loggerType){
            case loggerTypes.default:
                this.logger = new ConsoleLogger();
                break;
            default:
                this.logger = new ConsoleLogger();
                break;
        }
    }

    log(message = ''){
        this.logger.log(message);
    }

    warn(message = ''){
        this.logger.warn(message);
    }

    error(message = ''){
        this.logger.error(message);
    }

}

const loggerTypes = {
    default: 'console'
};

const currentLoggerType = loggerTypes.default;

export const logger = new Logger(currentLoggerType);