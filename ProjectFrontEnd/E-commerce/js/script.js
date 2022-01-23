var slider = [{
        text_1: "Sale Offer This Week",
        span_1: ' -20% off',
        product_name: "Chamcham Galaxy S9 | S9+",
        span_2: '$1209.00',
        image: "1.jpg",
        btn: 'shopping now'
    },
    {
        text_1: "Sale Offer off This Week",
        span_1: ' -10% off',
        product_name: "Phantom 4 Pro+ Obsidian",
        span_2: '$1849.00',
        image: "2.jpg",
        btn: 'shopping now'
    }, {
        text_1: "Sale Offer This Week",
        span_1: ' Black Friday',
        product_name: "Work Desk Surface Studio 2018",
        span_2: '$824.00',
        image: "3.jpg",
        btn: 'shopping now'
    },

]

var index = 0;
var sliderCount = slider.length;
// querySelectors();
// eventListeners();



var slider_center = document.querySelector('#slider_center');
var product_name = document.querySelector('#product_name');
var text_1 = document.querySelector('#text_1');
var span_1 = document.querySelector('#text_1 span');
var span_2 = document.querySelector('#text_2 span');
var btn_shopping = document.querySelector('#btn_shopping');

var left_arrow = document.querySelector('.left-arrow');
var right_arrow = document.querySelector('.right-arrow');





function showSlider(i) {
    index = i;

    slider_center.style.backgroundImage = `url(img/slider/${slider[index].image})`;
    product_name.textContent = slider[index].product_name;
    text_1.textContent = slider[index].text_1;
    span_1.textContent = slider[index].span_1;
    span_2.textContent = slider[index].span_2;
    text_1.appendChild(span_1);
    btn_shopping.textContent = slider[index].btn;
}


left_arrow.addEventListener('click', function(event) {
    event.preventDefault();
    index--;
    if (index < 0) {
        index = sliderCount - 1;


    }
    showSlider(index);
    console.log(index);
});


right_arrow.addEventListener('click', function(event) {
    event.preventDefault();
    index++;

    if (index >= sliderCount) {
        index = 0;

    }
    console.log(index);
    showSlider(index);

})