let buttons = document.querySelectorAll('.button--like');
buttons.forEach(button => {
    let gameid = button.parentElement.parentElement.id;
    let gamelikes = parseInt(localStorage.getItem(gameid)) || 0;
    button.textContent = `❤ ${gamelikes}`;
    button.addEventListener('click', (e) => {
        gamelikes = parseInt(gamelikes) + 1;
        localStorage.setItem(gameid, gamelikes);
        button.textContent = `❤ ${gamelikes}`;
    });
});