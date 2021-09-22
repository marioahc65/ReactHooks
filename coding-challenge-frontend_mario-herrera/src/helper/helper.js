import { BewariesImages } from '../images/index'

export const FixedText = ( text, maxLegth ) => {

    if (text.length > maxLegth){
        const newText = text.substring(0,maxLegth)
        const textConvert = `${newText}...`
        return textConvert
    }
    else
    return text


}


export const ramdomImages = () => {
    const randomImage = BewariesImages[Math.floor(Math.random() * BewariesImages.length)];
    return randomImage
  }