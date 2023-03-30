
export async function getHeros() {
    const apiResponse = await fetch('https://reqres.in/api/users');
    return apiResponse.json();
}

export async function getTodos() {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    return apiResponse.json();
}

export async function getMyProfile() {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return apiResponse.json();
}