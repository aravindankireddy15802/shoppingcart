const womenproducts = [
    {
            Id:"w1",
            image:"images/8e3b095771f69254d1832ff08823196e.jpg",
            name:"traditional texture yellow saree",
            price: 2499
    },
    {
        Id:"w2",
        image:"images/368ea2b34da28516923994e6464bc1c5.jpg",
        name:"designer sky blue saree",
        price: 2999
    
    },
    {
        Id:"w3",
        image:"images/A36I2299_765x.webp",
        name:"white full top",
        price: 2999
    
    },
    {
        Id:"w4",
        image:"images/a50546a3e02f2bde9866514c47eb83ef.jpg",
        name:"traditional greenish-blue saree ",
        price: 2299
    
    },
    {
    Id:"w5",
    image:"images/cd811f8a6b424c16deabc062e3e3a62d.jpg",
    name:"plain dark-yellow saree",
    price: 2699
    
    },        
    {
    Id:"w6",
    image:"images/fdb05b7bd85e503c8d88bbaec9b3269b.jpg",
    name:"traditional light-orange saree",
    price: 1999
    
    },
    {
    Id:"w7",
    image:"images/IMG_0005_1_bad33902-e2f8-4340-9e37-d86aa6880b37_765x.webp",
    name:"black shirt and scurt",
    price: 3499
    
    },
    {
    Id:"w8",
    image:"images/IMG_0042_27471975-1667-4578-bb9c-8d90316b9a5c_1200x.webp",
    name:"long frok ",
    price: 2599
    
    },
    {
    Id:"w9",
    image:"images/IMG_0045_1_045bf02f-cfe8-452e-aaea-e84b5f0f3173_1200x.webp",
    name:"one-piece light-pink",
    price: 1999
    
    },
    {
    Id:"w10",
    image:"images/IMG_0048_0991cc94-f087-4670-974d-65d8fad1a6fe_1200x.webp",
    name:"black shirt under designed trouser",
    price: 2799
    
    },
    {
    Id:"w11",
    image:"images/IMG_0102_dcb42cc2-9f6a-4aba-ab64-3eb9df4dd98f_765x.webp",
    name:"one-piece black",
    price: 2899
    
    },
    {
    Id:"w12",
    image:"images/IMG_0110_a7fbb303-7605-4adc-be51-b83d0a1ab894_1200x.webp",
    name:" white hoodie",
    price: 1999
    
    },
    {
    Id:"w13",
    image:"images/IMG_0166_ff5802bb-2b08-41a5-bc7b-92e39356190b_1200x.webp",
    name:"radent violet tshirt",
    price: 1799
    
    },
    {
    Id:"w14",
    image:"images/IMG_0311_c3b6086d-b60f-47b4-aaef-7f97ebc94cc7_1200x.webp",
    name:"white tshirt",
    price: 1799
    
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
            const women_renderProduct = (_women) => {
                     const item = document.querySelector("#women_product_container") ;
                     _women.forEach((product) => {
                         item.innerHTML += productTemplate(product);
                     });
                 };
                 
                     women_renderProduct(womenproducts);
                
    