
export async function getHeros() {
    const apiResponse = await fetch('https://reqres.in/api/users');
    return apiResponse.json();
}

export async function getTodos() {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    return apiResponse.json();
}