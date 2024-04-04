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
});

//Her er målet at tildele "læst" styling til individuelle notifikationer. 
document.querySelectorAll('.notification').forEach(notificationsClick => {
    notificationsClick.addEventListener('click', () =>{
        notificationsClick.style.backgroundColor = 'white';
        notificationsClick.style.boxShadow = 'unset';
        notificationsClick.classList.add('padding');
        let redDotEl = notificationsClick.querySelector('.dot');
        redDotEl.classList.add('hidden');

        // Opdatere antallet af ulæste notifikationer
        //'.notification:not(.padding) vælger alle elementer med klassen "notification", der ikke har klassen "padding" (de ulæste notifikationer).
        //Derefter hentes antallet elementer via  length, som repræsenterer antallet af ulæste notifikationer.
            let unreadNotificationsCount = document.querySelectorAll('.notification:not(.padding)').length;
            numberEl.textContent = unreadNotificationsCount;
    });
});