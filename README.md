# Gatsby + Netlify CMS Classx app

### Access Locally

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```



```

// group object by name 
const arr = [
  {id:1, name: 'test', desc: 'lol first'},
  {id:2, name: 'asdasdasd', desc: 'lol second'},
  {id:3, name: 'cdcdcdc', desc: 'lol third'},
  {id:4, name: 'test', desc: 'lol fourth'},
  {id:5, name: 'cdcdcdc', desc: 'lol fifth'},
];

const reduced = arr.reduce((acc, next) => {
  acc[next.name] = (acc[next.name] || []).concat(next);
  return acc;
}, {})

console.log(reduced);
// end of grouping

// count of same elements
const arr2 = [1,2,3,4,1,1,2,3,4,1,2,4,5,6,1,2];

const reduced2 = arr2.reduce((acc, next) => {
  acc[next] = (acc[next] || 0) + 1
  return acc;
}, {});

console.log(reduced2);
//end of counting

let arr3 = [
  { id: "abdc4051", date: "2017-01-24" },
  { id: "abdc4052", date: "2017-01-22" }
];

let arr4 = [
  { id: "abdc4051", name: "ab" },
  { id: "abdc4052", name: "abc" }
];

let narray = arr3.map((item, i) => Object.assign({}, item, arr4[i]));

console.log(arr3);

var d = {};
[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});
console.log(d)

var arrr1 = "john".split('');
var arrr2 = arrr1.reverse();
var arrr3 = "jones".split('');
arrr2.push(arrr3);
console.log("array 1: length=" + arrr1.length + " last=" + arrr1.slice(-1));
console.log("array 2: length=" + arrr2.length + " last=" + arrr2.slice(-1));



console.log(Boolean(0))

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10)); //factorial

var obj = {a:1,b:2, c: {age: 22}};
var obj2 = {...obj};
var obj3 = Object.assign({}, obj)

obj.c.age = 5;
console.log(obj,obj2, obj3)

console.log(typeof null === typeof undefined);

var set = [1,3,3,3,1,5,6,7,8,1];

console.log(new Set(set))


function checkingThis() {
  console.log(this);
}

const checking = () => {console.log(this)};

checkingThis();
checking();


var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function(ownerName){
      console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
  }
}

const q = car.displayDetails.call(car, 'Dauren')
```
