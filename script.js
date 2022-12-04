const c = new Audio();
c.src = "sakil/key2.mp4";

const d = new Audio();
d.src = "sakil/key3.mp4";

const e = new Audio();
e.src = "sakil/key4.mp4";

const f = new Audio();
f.src = "sakil/key18.mp4";

const sk = new Audio();
sk.src = "sakil/sk.mp4";

const g = new Audio();
g.src = "sakil/key6.mp4";

const h = new Audio();
h.src = "sakil/key7.mp4";

const i = new Audio();
i.src = "sakil/key8.mp4";

const j = new Audio();
j.src = "sakil/key9.mp4";

const k = new Audio();
k.src = "sakil/key10.mp4";

const l = new Audio();
l.src = "sakil/key11.mp4";

const m = new Audio();
m.src = "sakil/key12.mp4";

const n = new Audio();
n.src = "sakil/key13.mp4";

const o = new Audio();
o.src = "sakil/key14.mp4";

const p = new Audio();
p.src = "sakil/key19.mp4";

const q = new Audio();
q.src = "sakil/key16.mp4";

const r = new Audio();
r.src = "sakil/key17.mp4";

let string = "";

let button = document.querySelectorAll(".btn");
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('#hola').value = string;
        }
       else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('#hola').value = string;
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('#hola').value = string;
        }
    })
})