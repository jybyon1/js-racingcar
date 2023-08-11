// - [   ] 자동차는 이름을 가질 수 있다
// - [   ] 자동차는 랜덤 숫자가 4 이상이면 앞으로 전진한다
// - [   ] 자동차는 랜덤 숫자가 4 미만이면 앞으로 정지한다

// - [   ] 5자 이하만 가능하다.
// - [   ] 공백은 안된다.
// - [   ] 문자열만 입력 가능하다.
import Car from "../src/Car";



const DEFAULT_NAME = "jy";

describe("자동차", () => {
    test("자동차는 이름을 가질 수 있다", () => {
        const car = new Car(DEFAULT_NAME);
        expect(car.getName()).toBe(DEFAULT_NAME);
    });
    
    test("자동차 이름은 5자 이하만 가능하다", () => {        
        expect(() => {
            new Car("jyjyjy");
        }).toThrow("자동차 이름은 5자 이하만 가능하다")
    });

    test("자동차 이름은 1자 이상만 가능하다", () => {        
        expect(() => {
            new Car("");
        }).toThrow("자동차 이름은 1자 이상만 가능하다")
    });

    test("자동차 이름의 공백은 불가능하다", () => {        
        expect(() => {
            new Car("");
        }).toThrow("자동차 이름의 공백은 불가능하다")
    });

    test("자동차 이름은 영어 문자열만 입력이 가능하다", () => {        
        expect(() => {
            new Car("123!!");
        }).toThrow("자동차 이름은 영어 문자열만 입력이 가능하다")
    });

    test("자동차는 랜덤 숫자가 4 이상이면 앞으로 전진한다", () => {
        const car = new Car(DEFAULT_NAME);
        car.run(4);
        expect(car.getPosition()).toBe(1);
    });

    test("자동차는 랜덤 숫자가 4 미만이면 정지한다", () => {
        const car = new Car(DEFAULT_NAME);
        car.run(3);
        expect(car.getPosition()).toBe(0);
    });
})
