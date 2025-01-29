// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggler = document.querySelector('#toggle');
const body = document.body
const circle = document.querySelector("aside");
toggler.addEventListener('change', () => {
    if (toggler.checked) {
        body.classList.remove('light');
        body.classList.add('dark');
        circle.setAttribute('style', 'background: blue');
        localStorage.setItem('theme', 'dark');
         // Save preference
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        circle.setAttribute('style', 'background: linear-gradient(var(--light-accent), var(--circle-color), var(--dark-accent))');
        localStorage.setItem('theme', 'light'); // Save preference
    }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
let tempStorageArray = []

function readLocalStorage(){
    const storedData = JSON.parse(localStorage.getItem(tempStorageArray));
    let emptyArray = [];
    if (storedData) {
      tempStorageArray = storedData;
      return tempStorageArray;
    }
    else {
        return emptyArray;
    }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (){
    // WORK ON THIS POSSIBLY USING FUNCTION BELOW
}

/*function storeLocalStorage(newData){
    let = existingData = JSON.parse(localStorage.getItem("data")) || [];
    if (!Array.isArray(existingData)) {
        existingData = [existingData];
    }
    existingData.push(newData);
    localStorage.setItem('data', JSON.stringify(existingData));
}
*/

// ! Use the following function whenever you need to redirect to a different page

redirectURL = '';
redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};


