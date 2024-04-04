//querySelector til at fange de relevanet elementer. læste notifikationer
let buttonEl = document.querySelector('.markAsRead');
let numberEl = document.querySelector('.number');
let redDotEl = document.querySelectorAll('.dot');
let notificationEl = document.querySelectorAll('.notification');

//Looper igennem notifications med forEach. Tilføjer eventListener og ændrer styling. Derudover tilføjer hidden class til de røde prikker, og ændret antallet af nye notifikation til 0. 
buttonEl.addEventListener('click', () => {
    notificationEl.forEach(notifications => { 
        notifications.style.backgroundColor = 'white';
        notifications.style.boxShadow = 'unset';
        notifications.classList.add('padding');
    });
    redDotEl.forEach(redDots => {
        redDots.classList.add('hidden');
    });
    numberEl.textContent = '0';
    numberEl.style.backgroundColor ='hsl(219, 14%, 63%)';
});

//Her er målet at tildele "læst" styling til individuelle notifikationer, og samtidig fjerne den røde prik når der bliver trykket.  
notificationEl.forEach(notificationsClick => {
    notificationsClick.addEventListener('click', () =>{
        notificationsClick.style.backgroundColor = 'white';
        notificationsClick.style.boxShadow = 'unset';
        notificationsClick.classList.add('padding');
        let redDotEl = notificationsClick.querySelector('.dot');
        redDotEl.classList.add('hidden');
    });
});