import { capitalizarPrimeraLetra } from "../functions";

describe('Testing function capitalizarPrimeraLetra', () => {

    test('Text parse', () => {
        const text = "lorem ipsum dolor sit amet consectetur adipisicing elit.";
        expect(capitalizarPrimeraLetra(text)).toEqual('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
    });

});