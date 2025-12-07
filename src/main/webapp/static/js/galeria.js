
let toggle = function( image ) {
    let title = image.querySelector('h4');
    if (title.classList.contains('esquerra')) {
	title.classList.remove('esquerra');
    } else {
	title.classList.add('esquerra');
    }
};
window.addEventListener(
    'load',
    function () {
        let images = document.querySelectorAll('.image-envelope');
        images.forEach( function( image ) {

                let title = image.querySelector('h4');
                image.addEventListener(
                        'click',
                        function () {
                                toggle( image );
                        }
                );
        });
    }
);
