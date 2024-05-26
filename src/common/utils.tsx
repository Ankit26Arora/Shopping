import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// based on iphone 5s's scale
const isPortrait = SCREEN_HEIGHT > SCREEN_WIDTH ? true : false;
const scale = (isPortrait ? SCREEN_WIDTH : SCREEN_HEIGHT) / 320;

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

export default class Utils {
    static getHeightInPortraitMode = isPortrait ? SCREEN_HEIGHT : SCREEN_WIDTH;

    static isPortrait = () => {
        const { width, height } = Dimensions.get('window');

        return height > width ? true : false;
    };

    static scaleSize(size: any) {
        const newSize = size * scale;
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 3;
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 3;
        }
    }

    static widthScaleSize = (size: any) =>
        (SCREEN_WIDTH / guidelineBaseWidth) * size;

    static heightScaleSize = (size: any) =>
        (SCREEN_HEIGHT / guidelineBaseHeight) * size;

    static getDeviceDimentions = () => Dimensions.get('window');
}


