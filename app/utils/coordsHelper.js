import { options } from '../options';
class CoordsHelper {

    calcRotationShift(center, coords, rotation){
        const centerCartesian = this.convertToCartesian(center);
        const coordsCartesian = this.convertToCartesian(coords);
        const translatedCoords = this.tranlateToStartPoint(centerCartesian, coordsCartesian);
        const angle = rotation * Math.PI / 180;
        const shiftedX = translatedCoords.x * Math.cos(angle) - translatedCoords.y * Math.sin(angle);
        const shiftedY = translatedCoords.y * Math.cos(angle) - translatedCoords.x * Math.sin(angle);
        const originShiftedCoords = this.translateToOrigin(centerCartesian, {x: shiftedX, y: shiftedY});
        const gameShiftedCoords = this.convertToGameCoords(originShiftedCoords);
        return gameShiftedCoords;
    }

    tranlateToStartPoint(center, coords){
        return {
            x: coords.x - center.x,
            y: coords.y - center.y
        };
    }

    translateToOrigin(center, coords){
        return {
            x: coords.x + center.x,
            y: coords.y + center.y
        };
    }

    convertToCartesian(coords){
        return {
            x: coords.x,
            y: options.h - coords.y
        };
    }

    convertToGameCoords(coords){
        return {
            x: coords.x,
            y: options.h - coords.y
        };
    }

}

export const coordsHelper = new CoordsHelper();