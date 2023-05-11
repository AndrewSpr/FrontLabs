const obj = {
    className: 'open menu'
  }

const addClass = (obj, cls) => {
    var subObj = {};
    var arr = obj.className ? obj.className.split(" "):[];

    for(let i=0; i < arr.length; i++){
        subObj[arr[i]] = true;
    }

    subObj[cls] = true;
    arr = Object.keys(subObj);        

    obj.className = arr.join(" ");        
}

const removeClass = (obj, cls) => {
    var arr = obj.className ? obj.className.split(" "):[];

    for(let i=0; i < arr.length; i++){
        if(arr[i] == cls){
            arr.splice(i,1);
            i --;
        }
    }

    obj.className = arr.join(' ');
}

const dog = {
    name: 'someName',
    breed: 'someBreed',
    age: 2,
    noiseMethod: function() {
        if (this.age < 1) return alert("Тяф");
        else if (this.age < 3 && this.age >= 1) return alert("Гав");
        return alert("Ррр, я старый злой пёс!")
    }
}