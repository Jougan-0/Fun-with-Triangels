const sides=document.querySelectorAll('.side');
const checkbtn=document.querySelector('#check-button');
const outputBox=document.querySelector('#Output-Box');

checkbtn.addEventListener('click',function CalculateHypotunuse(){
    if(sides[0].value&&sides[1].value){
    var side3=SumOfSquare(Number(sides[0].value),Number(sides[1].value));
    const lengthofHypotunuse=Math.sqrt(side3);
    outputBox.innerText="The value of third side = "+lengthofHypotunuse+" cm";
    }
    else
    {
        outputBox.innerText="Please enter all the values";
    }
});

function SumOfSquare(side1,side2){
    var sum=side1*side1+side2*side2;
    return (sum);
}