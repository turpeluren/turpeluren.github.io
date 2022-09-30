
export function showFactors() {
    'use strict';

    console.log('factors');

    //Vilja, Openmind, En till
    /*let paramsCurrent = [.5, .5, .5];
    let paramsGoTo = [.5, .5, .5];

    let dayByDay = [
        [.2, .6, .3],
        [.9, .75, .5],
        [.6, .5, .2]
    ];*/

    const frame = document.getElementsByClassName('frame')[0];
    console.log(frame);
    frame.innerHTML = "hej";

    const row = document.createElement('div');
    row.classList.add('factorRow');
    frame.appendChild(row);
    row.innerHTML = "en faktor, två faktor";

}