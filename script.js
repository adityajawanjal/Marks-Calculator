const calcy = () =>{
    let p = document.getElementById('num1').value;
    let c = document.getElementById('num2').value;
    let b = document.getElementById('num3').value;
    let m = document.getElementById('num4').value;


     let total = parseInt(p)+parseInt(c)+parseInt(b)+parseInt(m);
     alert("The sum is "+parseInt(total));
     document.getElementById('result').innerHTML = `your score is ${total}`;
}
