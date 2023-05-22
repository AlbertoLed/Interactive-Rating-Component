const ratingOptions = document.querySelector('.card--rating__options');
const submitBtn = document.querySelector('.card--rating__button');
const cardRating = document.querySelector('.card--rating');
const cardThankYouState = document.querySelector('.card--thank-you-state');

// ----------------------------------
// SET WHITE COLOR FOR SELECTED INPUT
// ----------------------------------

ratingOptions.addEventListener('click', function(e) {
    const target = e.target;

    //If the target is an input element then make the label white color
    if(target.matches('#input-one') ||
    target.matches('#input-two') ||
    target.matches('#input-three') ||
    target.matches('#input-four') ||
    target.matches('#input-five')) {

        // Aplies white color to the label
        target.previousElementSibling.classList.add('white-color');
        // Removes others labels white color
        removeColorWhite(target.getAttribute('id'));
    }
    
});

// Removes the white color from all the inputs except the target
function removeColorWhite(target) {
    for(i = 0; i < 5; i++) {
        const option = ratingOptions.children[i];
        if(option.getAttribute('id') !== target + '-div') {
            option.firstElementChild.classList.remove('white-color');
            console.log(i);
        }
    }
}

// --------------------
// SHOW THANK YOU STATE
// --------------------

submitBtn.addEventListener('click', function(e) {

    // Check all the radio inputs
    for(i = 0; i < 5; i++) {
        const option = ratingOptions.children[i];

        // If ther is one radio input selected, then change of section.
        if(option.lastElementChild.checked) {
            e.preventDefault();

            //Take the value of the radio input and send it to the thank you section
            document.querySelector('.card--thank-you-state__rate').textContent = option.firstElementChild.textContent;
            
            //Change of section
            cardRating.classList.add('hidden');
            console.log(cardRating);
            cardThankYouState.classList.remove('hidden');
        }
    }

    
});
