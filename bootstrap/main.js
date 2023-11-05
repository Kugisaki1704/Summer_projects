const cards = document.querySelectorAll('[id^="hovercard"]');

cards.forEach((card) => {
    card.addEventListener('mouseover', function (e) {
        cards.forEach((c) => {
            if (c !== card) {
                c.style.filter = 'blur(3px)';
            }
        });
    });

    card.addEventListener('mouseout', function (e) {
        cards.forEach((c) => {
            if (c !== card) {
                c.style.filter = 'none';
            }
        });
    });
});

document.getElementById("register").addEventListener('click',function(){
    alert("Account created Successfully!");
})