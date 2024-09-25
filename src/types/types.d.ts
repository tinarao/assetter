interface User {
    id: number,
    username: string
    email: string
    password: string
    phone?: number

    shop: Shop
    profile: Profile
}

interface Profile {
    userId: number
}

interface Shop { }

interface Item { }

