const consent = localStorage.getItem('consent');
if (!consent) {
    const flash = document.querySelector('#flash-message');
    flash.classList.toggle('invisible');
    const inner = flash.querySelector('.flash__inner');
    const message = inner.querySelector('.flash__message');
    const button = document.createElement('button');
    button.classList.add('button', 'flash__button');
    button.textContent = `Ok`;
    const p = document.createElement('p');
    p.textContent = `Den här webbplatsen sparar information i din webbläsare kopplat till de olika spelen.`;
    message.appendChild(p);
    inner.appendChild(button);
    button.addEventListener('click', () => {
        localStorage.setItem('consent', 'true');
        flash.classList.toggle('invisible');
    });
}