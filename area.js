const sides=document.querySelectorAll('.side');
const checkbtn=document.querySelector('#check-button');
const OutputBox=document.querySelector('#Output-Box');

checkbtn.addEventListener('click',function CalculateArea(){
    if(sides[0].value&&sides[1].value){
        var area=AreaofTriangle(Number(sides[0].value),Number(sides[1].value));
        OutputBox.innerText="The value of third side = "+area+" cm²";
        }
        else
        {
            OutputBox.innerText="Please enter all the values";
        }
});

function AreaofTriangle(base,height){
    area = (base*height)/2.0;
    return area;
}