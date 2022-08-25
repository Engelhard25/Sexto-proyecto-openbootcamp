const lista_compra = ["Arroz","Pasta","Huevos","Carne","Pollo"];

lista_compra.push("Aceite de Girasol");
console.log(lista_compra);

lista_compra.pop();
console.log(lista_compra);

const peliculas_favoritas =[
    {Titulo: "Iron man", Director: "Jon Favreau", Fecha: new Date(2008, 4, 14) },
    {Titulo: "Ghost Busters", Director: "Ivan Reitman", Fecha: new Date(1984, 6, 8) },
    {Titulo: "Deadpool", Director: "Tim Miller", Fecha: new Date(2016, 2, 11) },
];


const filtro_fechas = peliculas_favoritas.filter(dates => dates.Fecha > new Date(2010, 0, 1));
console.log(filtro_fechas);

const directores = peliculas_favoritas.map(dir => dir.Director);
console.log(directores);

const titulos = peliculas_favoritas.map(tit => tit.Titulo);
console.log(titulos);

const dir_tit = directores.concat(titulos);
console.log(dir_tit);

const dir_tit_prop = [...directores,...titulos];
console.log(dir_tit_prop);