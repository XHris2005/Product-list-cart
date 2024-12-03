const cart = document.querySelectorAll('.cart');
const addItems = document.querySelectorAll('.add_items');
const desertName = document.querySelectorAll('.dessert_name');
const activeOrder = document.querySelector('.active_order');
const inActiveOrder = document.querySelector('.inactive_order')
const orderList = document.querySelectorAll('.order_list');
const orderName = document.querySelectorAll('.current_order_name');
const increase = document.querySelectorAll('.increment');
const decrease = document.querySelectorAll('.decrement');
const quantity = document.querySelectorAll('.add_items p');
const multiplier = document.querySelectorAll('#quantity');
const one_price = document.querySelectorAll('#price1');
const totalPrice = document.querySelectorAll('#Tprice');
const overallPrice = document.querySelector('.total_price h2');
const remove = document.querySelectorAll('.remove_item');
const finalOrder = document.querySelectorAll('.final_order');
const orderOnePrice = document.querySelectorAll('#order_Tprice p');
const orderTotalPrice = document.querySelector('.order_total_price h2');
const confirmOrderBtn = document.querySelector('.confirm_order');
const container2 = document.querySelector('.container2');
const orderQuantity = document.querySelectorAll('#order_quantity');
const newOrder = document.querySelector('.neworder');
const totalOrders = document.querySelector('.total_orders');



cart.forEach((element,index) => {
    element.addEventListener('click', function(){
        activeOrder.classList.remove('no_display');
        inActiveOrder.classList.add('no_display');
        addItems[index].classList.remove('no_display');
        for(let i = 0; i < orderName.length; i++){
            if(desertName[index].innerHTML === orderName[i].innerHTML){
                orderList[i].classList.remove('no_display');
                finalOrder[i].classList.remove('no_display');

                let totalPrice_array = totalPrice[i].innerHTML.split('$');
                let totalPriceNo = Number(totalPrice_array[1]);
                let overallPrice_array = overallPrice.innerHTML.split('$');
                let overallPriceNo = Number(overallPrice_array[1]);
                overallPriceNo = overallPriceNo + totalPriceNo;
                overallPrice_array[1] = overallPriceNo.toString();
                let new_overall = overallPrice_array.join('');
                overallPrice.innerHTML = '$' + new_overall;
                orderTotalPrice.innerHTML = '$' + new_overall;

                let totalOrdersNo = Number(totalOrders.textContent);
                totalOrdersNo++;
                let totalOrdersStr = totalOrdersNo.toString();
                totalOrders.textContent = totalOrdersStr;
            }; 
        }

    })
});

for (let x = 0; x < decrease.length; x++){
    increase[x].addEventListener('click', function(){
        let multiplier_array = multiplier[x].innerHTML.split('');
        let multiplierNo = Number(multiplier_array[0]);
        multiplierNo = multiplierNo + 1;
        multiplier_array[0] = multiplierNo.toString();
        let new_string = multiplier_array.join('');
        multiplier[x].innerHTML = new_string;
        quantity[x].innerHTML = multiplier_array[0];
        orderQuantity[x].innerHTML = new_string;

        let one_price_array = one_price[x].innerHTML.split('$');
        let totalPrice_array = totalPrice[x].innerHTML.split('$');
        let one_priceNo = Number(one_price_array[1]);
        let totalPriceNo = Number(totalPrice_array[1]);
        totalPriceNo = one_priceNo * multiplierNo;
        totalPrice_array[1] = totalPriceNo.toString();
        let new_total = totalPrice_array.join('');
        totalPrice[x].innerHTML = '$' + new_total;
        orderOnePrice[x].innerHTML = '$' + new_total;
        
        
        if(window.getComputedStyle(totalPrice[x]).display === 'none'){
            console.log(3);
        }else{
        let overallPrice_array = overallPrice.innerHTML.split('$');
        console.log(overallPrice_array[1])
        let overallPriceNo = Number(overallPrice_array[1]);
        overallPriceNo =overallPriceNo + one_priceNo;
        overallPrice_array[1] = overallPriceNo.toString();
        let new_overall = overallPrice_array.join('');
        overallPrice.innerHTML = '$' + new_overall;
        orderTotalPrice.innerHTML = '$' + new_overall;
        
        }

        let totalOrdersNo = Number(totalOrders.textContent);
        totalOrdersNo++;
        let totalOrdersStr = totalOrdersNo.toString();
        totalOrders.textContent = totalOrdersStr;
        
        
        
    });
    
    decrease[x].addEventListener('click', function(){
        let multiplier_array = multiplier[x].innerHTML.split('');
        let multiplierNo = Number(multiplier_array[0]);
        multiplierNo = multiplierNo - 1;

        let totalPrice_array = totalPrice[x].innerHTML.split('$');
        let one_price_array = one_price[x].innerHTML.split('$');
        let one_priceNo = Number(one_price_array[1]);
        let totalPriceNo = Number(totalPrice_array[1]);
        totalPriceNo = one_priceNo * multiplierNo;
        if( multiplierNo === 0){
            return;
        }else{
            multiplier_array[0] = multiplierNo.toString();
            let new_string = multiplier_array.join('');
            multiplier[x].innerHTML = new_string;
            quantity[x].innerHTML = multiplier_array[0];
            orderQuantity[x].innerHTML = new_string;

            totalPrice_array[1] = totalPriceNo.toString();
            let new_total = totalPrice_array.join('');
            totalPrice[x].innerHTML = '$' +new_total;
            orderOnePrice[x].innerHTML = '$' + new_total;


            if(window.getComputedStyle(totalPrice[x]).display === 'none'){
                console.log(3);
            }else{
            let overallPrice_array = overallPrice.innerHTML.split('$');
            console.log(overallPrice_array[1])
            let overallPriceNo = Number(overallPrice_array[1]);
            overallPriceNo =overallPriceNo - one_priceNo;
            overallPrice_array[1] = overallPriceNo.toString();
            let new_overall = overallPrice_array.join('');
            overallPrice.innerHTML = '$' + new_overall;
            orderTotalPrice.innerHTML = '$' + new_overall;
            };

            let totalOrdersNo = Number(totalOrders.textContent);
            totalOrdersNo--;
            let totalOrdersStr = totalOrdersNo.toString();
            totalOrders.textContent = totalOrdersStr;
        };
    });


    remove[x].addEventListener('click', function(){
        let totalPrice_array = totalPrice[x].innerHTML.split('$');
        console.log(totalPrice_array)
        let totalPriceNo = Number(totalPrice_array[1]);
        let overallPrice_array = overallPrice.innerHTML.split('$');
        let overallPriceNo = Number(overallPrice_array[1]);
        overallPriceNo = overallPriceNo - totalPriceNo;
        overallPrice_array[1] = overallPriceNo.toString();
        let new_overall = overallPrice_array.join('');
        overallPrice.innerHTML = '$' + new_overall;
        orderTotalPrice.innerHTML = '$' + new_overall;

        let multiplier_array = multiplier[x].innerHTML.split('');
        let multiplierNo = Number(multiplier_array[0]);
        let totalOrdersNo = Number(totalOrders.textContent);
        totalOrdersNo = totalOrdersNo - multiplierNo;
        let totalOrdersStr = totalOrdersNo.toString();
        totalOrders.textContent = totalOrdersStr;

        this.parentElement.classList.add('no_display');
        addItems[x].classList.add('no_display');
        finalOrder[x].classList.add('no_display');
    })
}; 

confirmOrderBtn.addEventListener('click',function(){
    container2.style.zIndex = '3';
});
newOrder.addEventListener('click', function(){
    location.reload();
})