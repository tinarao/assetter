import type { Handle } from "@sveltejs/kit";

const protectedRoutes = [
    "/me"
]

export const handle: Handle = async ({ event, resolve }) => {

    if (protectedRoutes.includes(event.url.pathname)) {
        console.log("Protect this route by any costs")
    } else {
        console.log("You can stay here yo")

    }

    return await resolve(event);
}