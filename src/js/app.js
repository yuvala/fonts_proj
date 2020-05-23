import { aaa, bbb } from '../js/lib-loader';

var isShow = false;
aaa.addEventListener('click', toggleYourself);
bbb.addEventListener('click', toggleYourself);


function toggleYourself(toggleWho) {
    console.log('toggleWho: ', toggleWho)
    isShow = !isShow;
    updateAAA();
    updateBBB();
}


function updateAAA() {
    if (isShow) {
        aaa.textContent = 'why why why';
    } else {
        aaa.textContent = 'bamba';
    }
}


function updateBBB() {
    if (isShow) {
        bbb.textContent = 'whywhywhy';
    } else {
        bbb.textContent = 'bamba';
    }
}