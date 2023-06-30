var d=document.querySelector('.burgers');
var burgers=[
    {name:'Whopper',price:'3$',calories:'800'},
    {name:'Bigmac',price:'4$',calories:'1000'},
    {name:'Double whopper',price:'5$',calories:'1200'},
    {name:'Tripple whopper',price:'6$',calories:'1400'},
    {name:'Tripple whopper',price:'6$',calories:'1700'},
    {name:'Tripple whopper',price:'6$',calories:'1800'}
    ,{name:'Tripple whopper',price:'6$',calories:'1400'}
    ,{name:'Tripple whopper',price:'6$',calories:'1400'}
];


burgers.forEach((burger) =>{
    d.innerHTML+=
    `<div>
        <a href="#">
        <h4>${burger.name}</h4>
        <ul>
            <li>Price: ${burger.price}</li>
            <li>Calories: ${burger.calories}</li>
        </ul>
        </a>
    </div>`;
});



