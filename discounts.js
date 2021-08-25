function calculateDiscount(price,discount) {
    const value = 100-discount;
    const finalPrice = (price * value) / 100;
    return finalPrice;
}


function PriceDiscount ()
{
    const value = document.getElementById("InputPrice").value;
    const value2 = document.getElementById("InputDiscount").value;

    const discount = calculateDiscount(value, value2);
    Message.innerText = "The price with discount is: "+discount+"$";
}

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function CouponDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    const inputCoupon = document.getElementById("InputCoupon").value;

    
    const userCoupon = coupons.find(element => element.name === inputCoupon);
    
    if (!userCoupon) {
        alert("El cupón " + inputCoupon + " no es válido");
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calculateDiscount(inputPrice, descuento);
    
        Message2.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}

