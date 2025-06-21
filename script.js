function click1(val)
{
    document.getElementById("out").value=document.getElementById("out").value+val
}
function clear1()
{
    document.getElementById("out").value=""
}
function equal1()
{
    var abc=document.getElementById("out").value
    var res=eval(abc)
    document.getElementById("out").value=res
}