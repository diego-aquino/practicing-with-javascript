const array = [
    {
        id: 4,
        nome: "Teste4"
    },
    {
        id: 1,
        nome: "Teste1"
    },
    {
        id: 3,
        nome: "Teste3"
    },
    {
        id: 2,
        nome: "Teste2"
    },
];

array.sort( (element1, element2) => {
    const name1 = element1.nome.toLowerCase();
    const name2 = element2.nome.toLowerCase();

    if (name1 > name2) {
        return 1;
    } else {
        return -1;
    }
} );
console.log(array);
