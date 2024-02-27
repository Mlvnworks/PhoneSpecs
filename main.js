class Phone{
    // fetch and show Full List of phone brands
    getPhoneBrands = async () => {
        
        // Brands output element
        const phoneBrandsListElem = document.querySelector("#phone-list-models");

        // Fetch brands
        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '7c0f533e61msh11ae916e9677bf7p1f10a4jsn51250cbed34d',
            'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch('https://mobile-phone-specs-database.p.rapidapi.com/gsm/all-brands', options);
            const brands = await response.json();

        // Loop through phone brands and output it
            brands.forEach(({brandValue}) => {
                    const option = document.createElement("option");
                    option.value = brandValue;
                    option.textContent = brandValue; 
                    phoneBrandsListElem.append(option);
            });
        } catch (error) {
            console.error(error);
        }

        return phoneBrandsListElem;
    }


    //
    // Get phones by brandname
    getPhonesByBrandName = async (brand) => {
        const phoneList = document.querySelector("#phone-list");

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c0f533e61msh11ae916e9677bf7p1f10a4jsn51250cbed34d',
            'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
        }
        };

        try {
            const getPhones = await fetch(`https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-models-by-brandname/${brand}`, options);
            const phones = await getPhones.json();

            console.log(phones);
            // phones.forEach(({modelValue}) => {
            //     const phoneItem = document.createElement("div");
            //     phoneItem.className = "phone-item";
            //     phoneItem.innerHTML = `<div class="phone-img-container">
            //                                 <img src="https://img.lazcdn.com/g/p/59c8620f5af4a6f9d69c641b7852f64b.jpg_720x720q80.jpg" alt="" class="phone-image">
            //                             </div>
            //                             <div class="phone-details">
            //                                 <p class="phone-brand">Phone Brand</p>
            //                                 <p class="phone-model">model</p>
            //                             </div>`;
            // })   
                      
        } catch (error) {
            console.error(error);
        }
    }
}



const phone = new Phone();

window.onload = async () => {
    // Fetch Phone brands
    const brands = await phone.getPhoneBrands();

    // fetch phones after the page loads
    phone.getPhonesByBrandName(brands.value);

    // fetch phones by chaging phone brand
    brands.addEventListener("change", (ev) => {
        const selectedBrand = brands.value;

        phone.getPhonesByBrandName(selectedBrand);
    } )
}

