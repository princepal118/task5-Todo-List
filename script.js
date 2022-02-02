const btn = document.querySelector('.btn');
var input = document.querySelector('input');
var myDiv = document.querySelector('.todo1');
const myDiv2 = document.querySelector('.todo2');

btn.addEventListener('click',function myfunc(e){

    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var li = document.createElement('li');  
    checkbox.type = "checkbox";

   

    var data = input.value;
    li.append(data);
    label.append(li);
    
    myDiv.append(checkbox);
    myDiv.append(label);  
    input.value = " ";   


    checkbox.addEventListener('click',(e) => {
        // var label1 = document.createElement('label');
        var list = document.createElement('li');

        list.id = "hi";


        if(e.currentTarget.checked == true){
            
            // var da = label.innerText;
            list.append(data);
            myDiv2.append(list);         
        }

        
        else if(e.currentTarget.checked == false){
            var lid = document.querySelector('#hi')
            console.log(lid.innerText);
            console.log(label.innerText);
            
            if(label.innerText.id === lid.innerText.id){
                lid.remove();
            }

        }
    });


    

  
    
});



/* <input value="Click me" onclick="alert('Click!')" type="button"></input> */





