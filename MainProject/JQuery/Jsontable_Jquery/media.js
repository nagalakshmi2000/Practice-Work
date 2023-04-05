$.ajax({
    url:"https://jsonplaceholder.typicode.com/todos",
    type:"get",
    success:function(data){
        // console.log(data);
        data.forEach(element => {
            $("tbody").append(`<tr>`)
            for(let i in element){
                $("tbody").append(`<td>${element[i]}</td>`)
            }
            $("tbody").append(`</tr>`);
        });
    }
})
        


