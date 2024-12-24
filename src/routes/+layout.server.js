/** @type {import('./$types').LayoutServerLoad} */
export function load(event) {
    return { isLogin: event.cookies.get("user") ? true : false };
}