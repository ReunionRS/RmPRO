const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')){
        navBtnImg.src = "assets/icons/close.png"
    } else {
        navBtnImg.src = "assets/icons/menu.svg"
    }
}

const counters = [
    { id: 'counter1', target: 47854 },
    { id: 'counter2', target: 10234 },
    { id: 'counter3', target: 19892 },
];

const increment = 114;
const interval = 17;

counters.forEach(counterData => {
    const counterDisplay = document.getElementById(counterData.id);
    let count = 0;
    const targetCount = counterData.target;

    const intervalId = setInterval(() => {
        count += increment;
        counterDisplay.textContent = count;
        if (count >= targetCount) {
            clearInterval(intervalId);
        }
    }, interval);
});
