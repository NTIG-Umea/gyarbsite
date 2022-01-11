/*
 * Vänta på att sidan har laddats.
 * Läs mer, https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
window.addEventListener('load', (event) => {
    // hämta menyn
    const collapse = document.querySelector('.navbar__collapse');

    // Hitta knappen i DOM-trädet och spara den i variabeln button.
    // Ett tips är att kunna och känna till vilka olika selectors vi kan använda.
    // Vad är ens en selector?
    // https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
    const button = document.querySelector('.navbar__toggle');

    // skapa en listener på knappen och bind den till eventet "click"
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    button.addEventListener(
        'click',
        (e) => {
            e.preventDefault();
            collapse.classList.toggle('navbar__collapse-show');

            // Om du vill byta ikonen för hamburgermeny eller färger så kan du göra det här.
            // antingen genom att manipulera klasser eller DOM
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
            // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        },
        false
    );

    const mql = window.matchMedia('(max-width: 768px)');
    mql.addEventListener('change', (e) => {
        if (!e.matches && collapse.classList[1] == 'navbar__collapse-show') {
            collapse.classList.toggle('navbar__collapse-show');
        }
    });
});
