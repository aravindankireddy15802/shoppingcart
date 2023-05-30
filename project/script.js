

const womenproducts = [
    {
            Id:"w1",
            image:"images/womencloth/8e3b095771f69254d1832ff08823196e.jpg",
            name:"printed brown shirt",
            price: 3499
    },
    {
        Id:"w2",
        image:"images/womencloth/368ea2b34da28516923994e6464bc1c5.jpg",
        name:"printed maroon-yellow shirt ",
        price: 2999

    },
    {
        Id:"w3",
        image:"images/womencloth/A36I2299_765x.webp",
        name:"plain white tshirt",
        price: 2999

    },
    {
        Id:"w4",
        image:"images/womencloth/a50546a3e02f2bde9866514c47eb83ef.jpg",
        name:"plain red shirt",
        price: 2299

},
{
    Id:"w5",
    image:"images/womencloth/cd811f8a6b424c16deabc062e3e3a62d.jpg",
    name:"checked light-yellow shirt",
    price: 2699

},        
{
    Id:"w6",
    image:"images/womencloth/fdb05b7bd85e503c8d88bbaec9b3269b.jpg",
    name:"lemon yellow shirt",
    price: 1999

},
{
    Id:"w7",
    image:"images/womencloth/IMG_0005_1_bad33902-e2f8-4340-9e37-d86aa6880b37_765x.webp",
    name:"printed blue-flower tshirt",
    price: 3499

},
{
    Id:"w8",
    image:"images/womencloth/IMG_0042_27471975-1667-4578-bb9c-8d90316b9a5c_1200x.webp",
    name:"checked blue shirt",
    price: 2599

},
{
    Id:"w9",
    image:"images/womencloth/IMG_0045_1_045bf02f-cfe8-452e-aaea-e84b5f0f3173_1200x.webp",
    name:"black bazer",
    price: 2999

},
{
    Id:"w10",
    image:"images/womencloth/IMG_0048_0991cc94-f087-4670-974d-65d8fad1a6fe_1200x.webp",
    name:"plain violet shirt",
    price: 2799

},
{
    Id:"w11",
    image:"images/womencloth/IMG_0102_dcb42cc2-9f6a-4aba-ab64-3eb9df4dd98f_765x.webp",
    name:"blue casuals ",
    price: 2899

},
{
    Id:"w12",
    image:"images/womencloth/IMG_0110_a7fbb303-7605-4adc-be51-b83d0a1ab894_1200x.webp",
    name:"light pink sweatshirt",
    price: 2399

},
{
    Id:"w13",
    image:"images/womencloth/IMG_0166_ff5802bb-2b08-41a5-bc7b-92e39356190b_1200x.webp",
    name:"light orange tshirt",
    price: 1799

},
{
    Id:"w14",
    image:"images/womencloth/IMG_0311_c3b6086d-b60f-47b4-aaef-7f97ebc94cc7_1200x.webp",
    name:"printed white shirt",
    price: 3199

},

]; 
const productTemplate = (product) => {
   return `
   <div class="col-md-6 col-lg-4 gy-3 my-3 text-center m-auto">
   <div class="card ">
    <img class="card-img-top" src="${product.image}" alt="${product.id}">
    <div class="card-body">
      <h6 class="card-title">${product.name}</h6>
      <p class="card-text"><i class="fa-solid fa-indian-rupee-sign"></i> ${product.price}</p>
    </div>
   </div> 
   </div>`; 
}

const renderProduct = (m_products) =>  {
    const element = document.querySelector("#product_container") ;
    m_products.forEach((product) => {
        element.innerHTML += productTemplate(product);
    });
  
};

renderProduct(products);


const suitproducts = [
    {
            Id:"s1",
            image:"images/mensuits/3_3e487665-0815-489c-b3ac-b7adb6454b9e.webp",
            name:"printed brown shirt",
            price: 3499
    },
    {
        Id:"s2",
        image:"images/mensuits/3pc_1233_orangeblazerwhitetr_1_5decb2eb.webp",
        name:"printed maroon-yellow shirt ",
        price: 2999

    },
    {
        Id:"s3",
        image:"images/mensuits/7b51b73ABFRL-ASSUTSLFT98764_1.webp",
        name:"plain white tshirt",
        price: 2999

    },
    {
        Id:"s4",
        image:"images/mensuits/9bf5381PIDP00241-V7_1.webp",
        name:"plain red shirt",
        price: 2299

},
{
    Id:"s5",
    image:"images/mensuits/52fe4edRRR-ARABSU5526_01.webp",
    name:"checked light-yellow shirt",
    price: 2699

},        
{
    Id:"s6",
    image:"images/mensuits/CPNM1284R2BA21FL_1.webp",
    name:"lemon yellow shirt",
    price: 1999

},
{
    Id:"s7",
    image:"images/mensuits/CPNM1369T1BS22FL_1.webp",
    name:"printed blue-flower tshirt",
    price: 3499

},
{
    Id:"s8",
    image:"images/mensuits/ef7c2a0PIDP00245-O7_1.webp",
    name:"checked blue shirt",
    price: 2599

},
{
    Id:"s9",
    image:"images/mensuits/greycs_1_26236b0f.webp",
    name:"black bazer",
    price: 2999

},
{
    Id:"s10",
    image:"images/mensuits/hangup-cs_d39whitetr_1_b375882b.webp",
    name:"plain violet shirt",
    price: 2799

},
{
    Id:"s11",
    image:"images/mensuits/Sienna_Dobby_Wedding_Tuxedo_In_Wine_Color_Slim_Fit-CPNM1269E1PA21FL-Image1.webp",
    name:"blue casuals ",
    price: 2899

},
{
    Id:"s12",
    image:"images/mensuits/Solid_Formal_2_Pcs_Suits_In_Teal_Cabrey-CPNM1459T1BA22FL-image1.webp",
    name:"light pink sweatshirt",
    price: 2399

},
{
    Id:"s13",
    image:"images/mensuits/Textured_Formal_Suits_In_Light_Blue_Riten-CPPM1370B1BA22FL-image1.webp",
    name:"light orange tshirt",
    price: 1799

},
{
    Id:"s14",
    image:"images/mensuits/Trailek_2_Pcs_Dobby_Suits_In_Beige-CPPM1368A2BS22FL-image1_jpg.webp",
    name:"printed white shirt",
    price: 3199

},

]; 

const rendersuits = (suitsproduct) =>{
 suitElement = document.querySelector("#suit_product_container");
 suitsproduct.forEach((product) =>{
    suitElement.innerHTML += productTemplate(product);
 });
}
rendersuits(suitproducts);