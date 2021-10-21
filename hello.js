const countEL =
document.getElementbyId('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/atsi.ooo/atsi/?amount=1')
    .then(res => res.json())
    .then(res => {
        countEL.innerHTML = res.value;
    })
}