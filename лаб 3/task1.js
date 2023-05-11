//task 1

const textOutput = (str, size) => {
    result.innerHTML = str;
    result.style = "font-size: " + size + "px";
}

//task2

const htmlTable = (a, b) => {
	let e = document.createElement("table");
    e.innerHTML = "<tr><td>"+a+"</td><td>"+b+"</td><td>";
	document.body.appendChild(e);
}

const htmlTablesOutput = () => {
    let a = prompt("Введите поля через запятую");
    let b = a.split(",");

    if (b.length == 2) {
  	    return htmlTable(b[0], b[1]);
    }
    
    return alert("Введите 2 поля");
}

//task 3

const htmlCreatingHeaders = (itteration) => {
    itteration = prompt('Введите количество итерация для создания заголовков')

    for(let i = 1; i <= itteration; i++) {
        var x = document.createElement("HEADER");
        x.setAttribute("id", "myHeader");
        document.body.appendChild(x);
    
        var y = document.createElement("H2"); 
        var t = document.createTextNode(`Header${i}`);
        y.appendChild(t);
    
        document.getElementById("myHeader").appendChild(y);
    }
}

//task 4

const someFunction = (...args) => {
    let str = ''
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        if (typeof(args[i]) === 'number') {
            sum += args[i]
        } else if (typeof(args[i]) === 'string') {
            str += `${args[i]} `
        }
    }
    console.log(sum, str)
}