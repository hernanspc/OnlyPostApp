
const getUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    return await data.json()
}

const getPostsOfUser = async (id: number) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
    return await data.json()
}

const getUsersWithPosts = async () => {

    const users = await getUsers()

    const usersPostsPromises = users.map((u) => {
        return getPostsOfUser(u.id)
    })

    let allRealPosts: PostResponse = []
    const allPosts = await Promise.all(usersPostsPromises)
    allPosts.map(p => {
        allRealPosts.push(...p)
    })
    const userPosts = users.map((u) => (
        {
            ...u,
            posts: allRealPosts.filter(p => p.userId === u.id)
        }
    ))

    console.log(userPosts)
}

getUsersWithPosts()