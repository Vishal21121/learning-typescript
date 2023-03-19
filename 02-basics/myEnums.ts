//* restricting user choice

//* if we don't place const in front of enum then it generates IIFE in js which is a lot of code so for escaping that and just get the value assigned code in js use const in front of enum
const enum SeatChoice {
    //* In the enums element if we don't provide then the value of the first element will be 0 and others value will be accordingly increment by 1
    // AISLE,
    // MIDDLE,
    // WINDOW,
    // FOURTH

    //* now we can provide the value of a particular element in string as well but for other elements we have to provide value in string or in numbers if we provide in number and then for elements after that will have the value automatically
    AISLE = "aisle",
    MIDDLE = 1,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE

export {}