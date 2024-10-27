// <!-- StAuth10244: I Sujal Thapa, 000904603 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else. -->
const appetizers = document.getElementById("appetizers");
const mainMenu = document.getElementById("main-course");
const dessert = document.getElementById("dessert");



function menuItemAsHTML(itemData) {
    return `<div class="list-group-item">
          <div class="row">
            <div class="col-md-4">
              <img
                src="${itemData.img}"
                alt="${itemData.name}"
                class="img-fluid"
              />
            </div>
            <div class="col-md-8">
              <h5 class="mb-1">${itemData.name}</h5>
              <p class="mb-1">
                ${itemData.desc}
              </p>
              <small>$${itemData.price}</small>
            </div>
          </div>
        </div>`;
}

const menuData = [
    {
        "name": "Momo (Dumplings)",
        "img": "image/momo.jpg",
        "desc": "Steamed dumplings filled with vegetables or meat.",
        "price": 10.00,
        "category": "appetizers"
    },
    {
        "name": "Dal Bhat",
        "img": "image/dalbhat.jpg",
        "desc": "Traditional lentil soup served with rice and vegetable curry.",
        "price": 10.00,
        "category": "main course"
    },
    {
        "name": "Chow Mein",
        "img": "image/chowmein.jpg",
        "desc": "Stir-fried noodles with vegetables and chicken.",
        "price": 10,
        "category": "main course"
    },
    {
        "name": "Thukpa",
        "img": "image/thukpa.jpg",
        "desc": "A warm noodle soup with vegetables and meat.",
        "price": 8.50,
        "category": "main course"
    },
    {
        "name": "Sekuwa",
        "img": "image/sekuwa.jpg",
        "desc": "Grilled skewers of marinated meat, served with chutney.",
        "price": 12.00,
        "category": "appetizers"
    },
    {
        "name": "Aloo Tama",
        "img": "image/alootama.jpg",
        "desc": "Potato and bamboo shoot curry with Nepali spices.",
        "price": 7.50,
        "category": "main course"
    },
    {
        "name": "Chatamari",
        "img": "image/chatamari.jpg",
        "desc": "Rice flour crepe topped with minced meat and vegetables.",
        "price": 6.50,
        "category": "appetizers"
    },
    {
        "name": "Choila",
        "img": "image/choila.jpg",
        "desc": "Spiced, grilled meat served with beaten rice.",
        "price": 9.00,
        "category": "appetizers"
    },
    {
        "name": "Gundruk Sadeko",
        "img": "image/gundruk.jpg",
        "desc": "Fermented leafy greens mixed with spices and oil.",
        "price": 5.50,
        "category": "appetizers"
    },
    {
        "name": "Samosa",
        "img": "image/samosa.jpg",
        "desc": "Crispy pastry filled with spiced potatoes and peas.",
        "price": 4.00,
        "category": "appetizers"
    },
    {
        "name": "Sel Roti",
        "img": "image/selroti.jpg",
        "desc": "Sweet, fried rice doughnut, a traditional Nepali snack.",
        "price": 3.50,
        "category": "desserts"
    },
    {
        "name": "Aloo Chop",
        "img": "image/aloochop.jpg",
        "desc": "Deep-fried potato fritters with spices.",
        "price": 4.50,
        "category": "appetizers"
    },
    {
        "name": "Bhutan",
        "img": "image/bhutan.jpg",
        "desc": "Crispy fried goat intestine with Nepali spices.",
        "price": 9.00,
        "category": "appetizers"
    },
    {
        "name": "Sukuti",
        "img": "image/sukuti.jpg",
        "desc": "Dried, spiced, and grilled meat served with onions and chilies.",
        "price": 10.00,
        "category": "appetizers"
    },
    {
        "name": "Puri Tarkari",
        "img": "image/puritarkari.jpg",
        "desc": "Puffed, fried bread served with spiced potato curry.",
        "price": 6.00,
        "category": "main course"
    },
    {
        "name": "luwam luwam luwam",
        "img": "image/puritarkari.jpg",
        "desc": "bajaedinxu dam dam dam",
        "price": 6.00,
        "category": "dessert"
    }
];


let appetizersHTML = "";
let mainCourseHtml = "";
let dessertHtml = "";
for(let i = 0; i < menuData.length; i++) {

    if(menuData[i].category == "appetizers"){
        appetizersHTML += menuItemAsHTML(menuData[i]);   
    }
    else if(menuData[i].category == "main course"){
        mainCourseHtml += menuItemAsHTML(menuData[i]);
    } 
    else {
      dessertHtml += menuItemAsHTML(menuData[i]);
    }
}


appetizers.innerHTML = appetizersHTML;
mainMenu.innerHTML = mainCourseHtml;
dessert.innerHTML = dessertHtml;


