let id = document.getElementById("wrkpb").getAttribute('data-pid');;
console.log(id);

let val = id.toString();
console.log(val);

if (val !== '') {
    alert("Your url is: https://search.google.com/local/writereview?placeid=" + val);
    window.location.reload();
}