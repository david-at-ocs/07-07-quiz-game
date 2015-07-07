var start = prompt("start value");
var end = prompt("ending value");
var countby = prompt("count by");

start = parseInt(start);
end = parseInt(end);
countby = parseInt(countby);

while (end < start) {
  end = prompt("enter an ending value greater than " + start);
  end = parseInt(end);
}


while (start < end) {
    console.log(start);
    start += countby;
}