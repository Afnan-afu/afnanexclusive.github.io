let button = document.getElementById("view");
let full_items = document.getElementById("full_items")

button.addEventListener("click", ()=>{
    if (full_items.style.display === "none"){
        full_items.style.display = "block";
        button.innerText = "Hide All"
    }else{
        full_items.style.display = "none";
        button.innerText = "View All Products"
    }
})
document.getElementById('text').addEventListener('keyup', function() {
    var input = this.value.toLowerCase();
    var products = document.querySelectorAll('.up li');

    products.forEach(function(product) {
        var productName = product.querySelector('.down p.name').textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none'; 
        }
    });
});
//device-list//
const productlist = document.getElementById("device-list");
window.addEventListener("load", function() {
    fetch('../category.json').then(response => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    }).then(data => {
        const devicelists = data.categories.map(category => {
            const devicelist = document.createElement("li");
            devicelist.innerHTML = ` <li>
                                        <img src="${category.image}" alt="svg"/>
                                        <p>${category.name}</p>
                                    </li>`;
            return devicelist;
        });
        productlist.append(...devicelists);
    })
    .catch(error => {
        console.log("Error:", error);
    });
}); 
const dlist = document.getElementById("itemlist");
window.addEventListener("load", function() {
    fetch('items.json').then(response => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    }).then(data => {
        const itemlists = data.products.map(product => {
            const itemlist = document.createElement("li");
            itemlist.innerHTML = ` 
                                <div class="top" style="background-image:url(${product.image});">
                               <span class="love"><img src="images/Vector.png" alt="png"/></span>
                                <span class="eye"><img src="images/Group.png" alt="png"/></span>
                                <span class="new">NEW</span>
                                <span class="fourty">-30%</span>
                                <div class="cart">
                                    <p>Add To Cart</p>
                                </div>  
                            </div>
                            <div class="down">
                                <p class="name">${product.name}</p>
                                <div class="doller">
                                    <p>$120</p>
                                    <del>$160</del>
                                </div>
                                <span>
                                  <p>$${product.price}</p>
                                  <img src="${product.star}" alt="png"/>
                                  <small>${product.rating}</small>
                                </span>
                                <div class="circle">
                                    <span class="red"></span>
                                    <span class="newred"></span>
                                </div>
                           </div>
                                `;
            return itemlist;
        });
        dlist.append(...itemlists);
    })
    .catch(error => {
        console.log("Error:", error);
    });
}); 
// more item
const moreitem = document.getElementById("more")
window.addEventListener("load", function() {
    fetch('all.json').then(response => {
        if (!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    }).then(data => {
        const morelists = data.more_items.map(more_item => {
            const morelist = document.createElement("li");
            morelist.innerHTML = ` 
                                <div class="top" style="background-image:url(${more_item.image});">
                               <span class="love"><img src="images/Vector.png" alt="png"/></span>
                                <span class="eye"><img src="images/Group.png" alt="png"/></span>
                                <span class="new">NEW</span>
                                <span class="fourty">-30%</span>
                                <div class="cart">
                                    <p>Add To Cart</p>
                                </div>  
                            </div>
                            <div class="down">
                                <p class="name">${more_item.name}</p>
                                <div class="doller">
                                    <p>$120</p>
                                    <del>$160</del>
                                </div>
                                <span>
                                  <p>$${more_item.price}</p>
                                  <img src="${more_item.star}" alt="png"/>
                                  <small>${more_item.rating}</small>
                                </span>
                                <div class="circle">
                                    <span class="red"></span>
                                    <span class="newred"></span>
                                </div>
                           </div>
                                `;
            return morelist;
            
        });
        moreitem.append(...morelists);
    })
    .catch(error => {
        console.log("Error:", error);
    });
}); 

// drop down
const dropdown = document.getElementById("dropdown");
const click = document.getElementById("drop");
// const list = document.getElementById("list")
click.addEventListener("click", function() {
    dropdown.style.display = "block"
    dropdown.addEventListener("click", ()=> {
        dropdown.style.display = "none"
    })
})