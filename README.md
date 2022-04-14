# time-to-fry

Library to calculate minimum time that is needed to fry some amount of cutlets in case of restricted frying pan capacity

## Importing

It supposed to use naming import cuz defaults aren't cool:

`import { getFryingTime } from 'time-to-fry'`

## Using

`getFryingTime(cutletsAmount: number, panCapacity: number, tps: number): number` - returns minimum time of frying cutlets

where:

`cutletsAmount` is total amount of cutlets that need to be fried,

`panCapacity` is amount of cutlets that your pan can contain at one time,

`tps` is 'time per side' parameter ('side' is top/bottom surface of cutlet)

Attention! Using non-standart cutlet (with sides of quantity more that two) wastes you time!

## Disclaimer

Calculating algorithm is contraversal and could be discussed (but isn't guaranted to be changed).
