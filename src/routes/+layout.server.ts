import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
    const { cookies, locals } = event;

    console.log(locals);
    console.log(cookies);

};