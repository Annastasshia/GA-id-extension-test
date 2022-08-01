let id = document.getElementById("wrkpb").getAttribute('data-pid');;
console.log(id);

let val = id.toString();
console.log(val);

if (val !== '') {
    alert("Your GA id is: " + val);
    window.location.reload();
}