const products=[{name:'علبة هدايا فاخرة',price:3000,category:'هدايا'}];
document.getElementById('products').innerHTML=products.map(p=>`<div>${p.name} - ${p.price} دج</div>`).join('');