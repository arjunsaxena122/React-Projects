export const githubLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/arjunsaxena122');
    return response.json()
}