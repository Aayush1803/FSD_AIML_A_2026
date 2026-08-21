/*const child=document.createElement('div');
child.setAttribute('class','card');
const image=document.createElement('img');
image.setAttribute('src','https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d');
image.setAttribute('width','300');
image.setAttribute('height','200');
const h2=document.createElement('h2');
h2.innerText='Price $100';
child.appendChild(image);
child.appendChild(h2);  
const parent=document.getElementById('root');
parent.appendChild(child);*/
const data = [
    { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "525/-" },
    { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "425/-" },
    { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "625/-" },
];
function Book(props){
    const image=React.createElement("img",{src:props.Image,
                                    width:"50px",
                                    height:"50px"});
    const h2=React.createElement("h2",{color:"red"},"Price: "+props.price);
    const child=React.createElement("div",{className: "card"},[image,h2]);
    return child;
}

const booklist=React.createElement("div",{className:"booklist"},child)
const parent=document.getElementById("root");
ReactDOM.render(booklist,parent);