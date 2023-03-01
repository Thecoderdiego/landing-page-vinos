export default function hamburguerMenu(btn,panel,menuLinks) {
    const d = document;
    d.addEventListener('click',(e)=>{
         if (e.target.matches(btn) || (e.target.matches(`${btn} *`))) {
            console.log('diclick');
            d.querySelector(panel).classList.toggle('is-active');
        }

        if (e.target.matches(`${menuLinks} *`)) {
            d.querySelector(panel).classList.remove('is-active');
            console.log(e.target);
        }
    });
}


