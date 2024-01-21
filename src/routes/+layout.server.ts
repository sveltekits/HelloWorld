import type { Tuser } from '$lib/types';
import type { LayoutServerLoad } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
    const { cookies, locals } = event;

    console.log(cookies);

    const imsiUser: Tuser = {
        id: '00000',
		name: 'guest',
        class: '0',
		region: '00000'
    }

    try {
		if (!locals.user) {
			// console.log('USER :: 정의되지 않았습니다.');
			locals.user = imsiUser;
		}
	} catch (e) {
		throw error(404, (e as Error).message);
	}

    return {
        user: locals.user
    }

};