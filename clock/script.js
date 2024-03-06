function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hourRotation = 360 * (hours % 12) / 12 + 90;
    const minuteRotation = 360 * minutes / 60 + 90;
    const secondRotation = 360 * seconds / 60 + 90;

    document.getElementById('hour-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondRotation}deg)`;
}


setInterval(updateClock, 1000);


updateClock();
