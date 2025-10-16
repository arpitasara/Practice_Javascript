console.log("video scripts added");
//1- Fetach ,load and show categories on html

//create loadCategories 
const loadCategories = () => {
   //fetach the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};

//{
//"category_id": "1001",
//"categories": "music",

//}

//create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach(item => {
 console.log(item);
 //create a button
 const button = document.createElement('button');
 button.classList="btn";
 button.innerText = item.category;
 //add button category container

    categoryContainer.append(button);
    });
};
loadCategories();