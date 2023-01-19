const InputAngels=document.querySelectorAll(".Angels");
const checkbutton=document.querySelector("#check-button");
const OutputBox=document.querySelector("#Output-Box");


checkbutton.addEventListener("click",function CheckIfTriangel(){
    for(let i=0;i<3;i++)
    if(InputAngels[i].value===""||Number(InputAngels[i].value)===0)
    {
        OutputBox.innerText="Please enter all the fields or one of them is zero";
        return;
    }
    var sum=TheTotalsum();
    if(sum===180)
    OutputBox.innerText="YEppe it's a triangel😃";
    else
    OutputBox.innerText="Sorry not a triangle 😥";
});

function TheTotalsum(){
    var sum=0;
    for(let i=0;i<3;i++)
    sum=sum+Number(InputAngels[i].value);
    return sum;
}