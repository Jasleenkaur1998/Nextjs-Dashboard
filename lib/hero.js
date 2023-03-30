
export default async function getHeros() {
    const apiResponse = await fetch('https://reqres.in/api/users');
    return apiResponse.json();
}