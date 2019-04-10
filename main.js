function ex8()
{
var age = document.getElementById('age').value
if (isNaN(age))
{
  alert("des chiffres")
}
  else
{
  if (age >=18)
{
  alert("vous etes majeur");
}
 else
{
alert("vous etes mineur");
}
}
}
