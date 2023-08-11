const DEFAULT_POSITION = 0;
const CAR_RUN_UNIT = 1;
const RUN_THRESHOLD = 4;
const CAR_NAME_MAX_LENGTH = 5;
const CAR_NAME_MIN_LENGTH = 1;

const isAlphabet = (str) => {
    const regex = /^[a-zA-Z]*$/;
    return regex.test(str)
}

export default class Car {
    #name;
    #position = DEFAULT_POSITION;

    constructor(name){
        this.validateName(name)
        this.#name = name;
    }

    validateName(name){
        if(name.length > CAR_NAME_MAX_LENGTH ) {
            throw new Error(`자동차 이름은 ${CAR_NAME_MAX_LENGTH}자 이하만 가능하다`)
        }
        if(name.length < CAR_NAME_MIN_LENGTH) {
            throw new Error(`자동차 이름은 ${CAR_NAME_MIN_LENGTH}자 이상만 가능하다`)
        }
        if(!isAlphabet(name)) {
            throw new Error(`자동차 이름은 영어 문자열만 입력이 가능하다`)
        }
         
    }

    getName() {
        return this.#name
    }

    getPosition() {
        return this.position
    }

    run(number) {
        if(number >= RUN_THRESHOLD) {
            this.#position += CAR_RUN_UNIT;
        }
    }

}