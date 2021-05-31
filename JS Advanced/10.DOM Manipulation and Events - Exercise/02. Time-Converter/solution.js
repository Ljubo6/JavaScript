function attachEventsListeners() {

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const main = document.querySelector('main');

    main.addEventListener('click', function (e) {
        if (e.target.defaultValue === 'Convert') {
            if (days.value !== '') {
                let current = Number(days.value);
                hours.value = current * 24;
                minutes.value = current * 1440;
                seconds.value = current * 86400;
            }else if(hours.value !== ''){
                let current = Number(hours.value);
                days.value = current / 24;
                minutes.value = current * 60;
                seconds.value = current * 3600;
            }else if(minutes.value !== ''){
                let current = Number(minutes.value);
                days.value = current / 1440;
                hours.value = current / 60;
                seconds.value = current * 60;
            }else if(seconds.value !== ''){
                let current = Number(seconds.value);
                days.value = current / 86400;
                hours.value = current / 3600;
                minutes.value = current / 60;
            }
        }
    })
}