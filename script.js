let items = 0;

document.getElementById('cart-items').innerHTML = items;


function add_item()
{
    

    if(items >= 999)
    {
        document.getElementById("MaxAlert").classList.add("add-alert-anime");
        document.getElementById("MaxAlert").addEventListener("animationend",function(){
            document.getElementById("MaxAlert").classList.remove("add-alert-anime");
        });
    }
    else
    {
        items++;
        document.getElementById('cart-items').innerHTML = items;
        document.getElementById("AddAlert").classList.add("add-alert-anime");
        document.getElementById("AddAlert").addEventListener("animationend",function(){
            document.getElementById("AddAlert").classList.remove("add-alert-anime");
        });
    }
    
}

function del_item(e)
{
    e.parentNode.remove();
}
