const products = [
    {
            Id:"1",
            image:"images/IMG_0047_9520c34b-d935-43b6-9cf0-37b92034e179_765x.jpg",
            name:"printed brown shirt",
            price: 3499
    },
    {
        Id:"2",
        image:"images/IMG_6fa51afc-f3a0-4584-899d-1d054bd3fd8e_1200x.jpg",
        name:"printed maroon-yellow shirt ",
        price: 2999

    },
    {
        Id:"3",
        image:"images/HERO_2a678e66-56a6-4f1d-a9fd-6292fb4585b4_1200x.webp",
        name:"plain white tshirt",
        price: 2999

    },
    {
        Id:"4",
        image:"images/2_86c51663-36c6-4e2e-aa00-278904b74cde_765x.jpg",
        name:"plain red shirt",
        price: 2299

},
{
    Id:"5",
    image:"images/IMG_0021_bfdaba48-14eb-455d-95f2-1222ae03a255_765x.jpg",
    name:"checked light-yellow shirt",
    price: 2699

},        
{
    Id:"6",
    image:"images/1-0744899001674485691.jpg",
    name:"lemon yellow shirt",
    price: 1999

},
{
    Id:"7",
    image:"images/IMG_0037_12_1200x.webp",
    name:"printed blue-flower tshirt",
    price: 3499

},
{
    Id:"8",
    image:"images/IMG_0129_1_66d03ed8-a563-4445-a87b-526999bb532a_765x.webp",
    name:"checked blue shirt",
    price: 2599

},
{
    Id:"9",
    image:"images/IMG_0202_1_b1b5b8c7-b39a-4eee-97bf-34bfac937320_765x.jpg",
    name:"black bazer",
    price: 2999

},
{
    Id:"10",
    image:"images/IMG_0203_7a039149-9678-457a-a5ed-a66f12fae163_765x.webp",
    name:"plain violet shirt",
    price: 2799

},
{
    Id:"11",
    image:"images/Layer8_6bb8e88c-6836-42bc-af3b-994b9a733be7_1200x.webp",
    name:"blue casuals ",
    price: 2899

},
{
    Id:"12",
    image:"images/PEARLSPINK_1200x.webp",
    name:"light pink sweatshirt",
    price: 2399

},
{
    Id:"13",
    image:"images/RABBITTEE2_765x.webp",
    name:"light orange tshirt",
    price: 1799

},
{
    Id:"14",
    image:"images/ROTAR_765x.jpg",
    name:"printed white shirt",
    price: 3199

},

]; 


const productTemplate = (product) => {
    return `
    <div class="col-md-6 col-lg-4 gy-3 my-3 text-center m-auto card_container">
    <div class="card ">
     <img class="card-img-top" src="${product.image}" alt="${product.id}">
     <div class="card-body">
       <h6 class="card-title ">${product.name}</h6>
       <p class="card-text fw-bold"><i class="fa-solid fa-indian-rupee-sign"></i> ${product.price}</p>
     </div>
     <div class="d-flex container justify-content-center gap-4 mb-5">
     <button class="btn btn-warning w-50">buy now</button>
     <button class="btn btn-dark w-50 text-light">add to cart</button>
     
     </div>
    </div> 
    </div>`; 
 };
 const renderProduct = (m_products) =>  {
    const element = document.querySelector("#product_container") ;
    m_products.forEach((product) => {
        element.innerHTML += productTemplate(product);
    });
  
};

renderProduct(products);
