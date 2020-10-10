const shoes = [
  {
    id: 1,
    title: "Nike Air Max 90",
    category: "nike",
    price: 11.99,
    img: "./images/nike.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Adidas Futurecraft 4d",
    category: "adidas",
    price: 13.99,
    img: "./images/adidas.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Adidas Pharrell Hu NMD",
    category: "adidas",
    price: 6.99,
    img: "./images/adidas2.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Adidas NMD",
    category: "adidas",
    price: 20.99,
    img: "./images/adidas4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Jordan XX",
    category: "jordan",
    price: 22.99,
    img: "./images/jordan4.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Jordan I",
    category: "jordan",
    price: 18.99,
    img: "./images/jordan.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Nike Infinity Run",
    category: "nike",
    price: 8.99,
    img: "./images/nike3.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Nike SuperRep Go",
    category: "nike",
    price: 12.99,
    img: "./images/nike4.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Adidas superstar",
    category: "adidas",
    price: 16.99,
    img: "./images/adidas6.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Jordan X",
    category: "jordan",
    price: 39.99,
    img: "./images/jordan5.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Nike swift",
    category: "jordan",
    price: 21.99,
    img: "./images/jordan2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "Nike swiss",
    category: "nike",
    price: 9.99,
    img: "./images/nike2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// Select Elements
const container = document.querySelector(".container");
const sectionCenter = document.querySelector(".section-center");

// After Html and css has loaded
window.addEventListener("DOMContentLoaded", function () {
  showShoeBrands(shoes);
  displayShoesButtons();
});

// show shoe Brands
function showShoeBrands(shoes) {
  let shoeBrands = shoes.map(function (item) {
    console.log(item);
    return `
        <article>
          <div>
            <img src="${item.img}" alt=${item.title} class="photo" />
            <h3>${item.title}</h3>
            <p class="item-text">
             ${item.desc}
            </p>
            <h4 class="price">$${item.price}</h4>
          </div>
          </article`;
  });
  shoeBrands = shoeBrands.join("");
  sectionCenter.innerHTML = shoeBrands;

  //   console.log(shoeBrands);
}

// show the shoes buttons
function displayShoesButtons() {
  const categories = shoes.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return ` <button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");

  //   filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const shoesCategory = shoes.filter(function (shoesItem) {
        if (shoesItem.category === category) {
          return shoesItem;
        }
      });

      if (category === "all") {
        showShoeBrands(shoes);
      } else {
        showShoeBrands(shoesCategory);
      }
    });
  });
}
