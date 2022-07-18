let swap = document.getElementById('swap');
let app = document.getElementById('app');


 swap.addEventListener('click', () => {
    // document.getElementById('app').classList = 'night';
    // document.getElementById('swap').classList = 'button_night';

        if(app.classList.contains('day') && swap.classList.contains('button_day')) {
            document.getElementById('app').classList = 'night';
            document.getElementById('swap').classList = 'button_night';
        } else if(app.classList.contains('night') && swap.classList.contains('button_night')) {
            document.getElementById('app').classList = 'day';
            document.getElementById('swap').classList = 'button_day';
        }
});
