
//To select Input We Do This.

const btn = document.querySelector('.btn');
//passing Add Event Listener Here.
btn.addEventListener('click',function myfunc(e){
    e.preventDefault();
    
    // var array =[];
    var input = document.querySelector('input');
    var myDiv = document.querySelector('.todo1');
    var checkbox = document.createElement('input');
    // checkbox.onclick = fun
    var label = document.createElement('label');
    var li = document.createElement('li');  
    checkbox.type = "checkbox";

    // array.push(checkbox)
    // console.log(array);
    
    var data = input.value;
    li.append(data);
    label.append(li);
    
    myDiv.append(checkbox);
    myDiv.append(label);
    console.log(label);
    
    input.value = " ";

    // Implement Array to save Data.
    // array.push()
    
    // var checkbox = document.querySelector('input');
    
    const myDiv2 = document.querySelector('.todo2');
    checkbox.addEventListener('change',(e) => {
        // var label1 = document.createElement('label');
        var list = document.createElement('li');

        if(e.currentTarget.checked){

            var da = label.innerText;
            list.append(da);
            myDiv2.append(list);         
        }
        else if(e.currentTarget ){
            console.log(e)
            // myDiv2.removeChild(list);

            



        }
    });


    

  
    
});



{/* <input value="Click me" onclick="alert('Click!')" type="button"></input> */}





