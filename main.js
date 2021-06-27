var Name_of_the_Guest_Array = [];
function Submit() {
var Guest_name = document.getElementById("Enter_name").value;
Name_of_the_Guest_Array.push(Guest_name);
document.getElementById("Display_names").innerHTML = Name_of_the_Guest_Array;
console.log(Name_of_the_Guest_Array);
var length_of_the_array = Name_of_the_Guest_Array.length;
console.log(length_of_the_array);
}
function Show_list(){
    var i = Name_of_the_Guest_Array.join("<br>");
    console.log(Name_of_the_Guest_Array);
    document.getElementById("show_names").innerHTML = i.toSorting();
}
function sorting() {
    Name_of_the_Guest_Array.sort();
    var i = Name_of_the_Guest_Array.join("<br>");
    console.log(Name_of_the_Guest_Array);
    document.getElementById("Sorted_names").innerHTML = i.toString();
}
function Search() {
    var i = document.getElementById("Search_names").innerHTML = i.toSorting();
    var found = 0;
    var j;
    for(j=0; j<Name_of_the_Guest_Array.length; j++) {
        if(++Name_of_the_Guest_Array[j]) {
            found = found+1;
        }
    }
    document.getElementById("Search_names").innerHTML = "Name found"+found+"Time/s";
    console.log("found Name"+found+ Time/s);
}