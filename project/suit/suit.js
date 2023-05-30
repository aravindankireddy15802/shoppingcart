const productTemplate = (product) => {
    return `
    <div class="col-md-6 col-lg-4 gy-3 my-3 text-center m-auto">
    <div class="card ">
     <img class="card-img-top" src="${product.image}" alt="${product.id}">
     <div class="card-body">
       <h6 class="card-title">${product.name}</h6>
       <p class="card-text"><i class="fa-solid fa-indian-rupee-sign"></i> ${product.price} per day</p>
     </div>
    </div> 
    </div>`; 
 }

const suitproducts = [
{
Id:"s1",
image:"mensuits/3_3e487665-0815-489c-b3ac-b7adb6454b9e.webp",
name:"full black suit with red tie",
price: 1799
},
{
Id:"s2",
image:"mensuits/3pc_1233_orangeblazerwhitetr_1_5decb2eb.webp",
name:"orange lenin with white trouser  ",
price: 1499

},
{
Id:"s3",
image:"mensuits/7b51b73ABFRL-ASSUTSLFT98764_1.webp",
name:"yellow suit with black trouser",
price: 1699

},
{
Id:"s4",
image:"mensuits/9bf5381PIDP00241-V7_1.webp",
name:"full black suit",
price:1799

},
{
Id:"s5",
image:"mensuits/52fe4edRRR-ARABSU5526_01.webp",
name:"full cream suit",
price: 1899

},        
{
Id:"s6",
image:"mensuits/CPNM1284R2BA21FL_1.webp",
name:"full maroon suit",
price: 1999 

},
{
Id:"s7",
image:"mensuits/CPNM1369T1BS22FL_1.webp",
name:"full blue suit with violet tie",
price: 1699

},
{
Id:"s8",
image:"mensuits/ef7c2a0PIDP00245-O7_1.webp",
name:"shiny full brown",
price: 1499

},
{
Id:"s9",
image:"mensuits/greycs_1_26236b0f.webp",
name:"full gray suit",
price: 1599

},
{
Id:"s10",
image:"mensuits/hangup-cs_d39whitetr_1_b375882b.webp",
name:"printed blue blazer with white truoser",
price: 1899

},
{
Id:"s11",
image:"mensuits/Sienna_Dobby_Wedding_Tuxedo_In_Wine_Color_Slim_Fit-CPNM1269E1PA21FL-Image1.webp",
name:"full maroon with maroon tie  ",
price: 1999

},
{
Id:"s12",
image:"mensuits/Solid_Formal_2_Pcs_Suits_In_Teal_Cabrey-CPNM1459T1BA22FL-image1.webp",
name:"full blue suit",
price: 1399

},
{
Id:"s13",
image:"mensuits/Textured_Formal_Suits_In_Light_Blue_Riten-CPPM1370B1BA22FL-image1.webp",
name:"sky blue blazer with grey trouser",
price: 1799

},
{
Id:"s14",
image:"mensuits/Trailek_2_Pcs_Dobby_Suits_In_Beige-CPPM1368A2BS22FL-image1_jpg.webp",
name:"full cream suit with violet tie  ",
price: 1599

},

]; 

const rendersuits = (suitsproduct) =>{
suitElement = document.querySelector("#suit_product_container");
suitsproduct.forEach((product) =>{
suitElement.innerHTML += productTemplate(product);
});
}
rendersuits(suitproducts); 
