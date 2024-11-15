import _ from 'underscore'; 

/**
 * Crea un nuevo deck
 * @param {Array<String>} tiposDeCarta  ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ['A','J','Q','K'];
 * @returns {Array<String>} devuelve el nuevo deck barajado
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta) { throw new Error('TiposDeCarta es obligatorio') }
    if (tiposDeCarta.length  === 0) { throw new Error('Tipos de carta tiene que ser arr<string>')}

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck; 