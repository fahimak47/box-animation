const container = document.getElementById('boxContainer');

const randomTime = (max) => {
    return Math.floor(Math.random() * (max - 3) + 3);
};

const randomNum = () => {
    return Math.floor(Math.random() * (1000 - 1) + 1);
};

for (let i = 1; i < 1000; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    const delay = randomTime(i);
    box.style.animationDelay = `${delay}s`;
    container.appendChild(box);
}
