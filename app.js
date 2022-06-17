const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})


let countDownBox    = document.querySelector(".allTime");
        let daysBox            = document.querySelector(".days");
        let hrsBox            = document.querySelector(".hrs");
        let minBox            = document.querySelector(".min");
        let secBox            = document.querySelector(".sec");
        let wp            = document.querySelector(".wp");
        let countDownDate    = new Date("Jun 27, 2022 09:00:00").getTime();

        // COUNT DOWN FUNCTION
        let x = setInterval(function() {

            // GET DATE
            let now = new Date().getTime();

            // TIME BETWEEN NOW AND DATE
            let distance = countDownDate - now;

            // CALCULATION TIME
            let days     = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours     = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes    = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds    = Math.floor((distance % (1000 * 60)) / 1000);

            daysBox.innerHTML    = days ;
            hrsBox.innerHTML     = hours ;
            minBox.innerHTML     = minutes ;
            secBox.innerHTML     = seconds ;

            // IF FINISH
            if (distance < 0) {
                clearInterval(x);
                countDownBox.innerHTML = "Â¡FELICIDADES!";
            }
        }, 1000);