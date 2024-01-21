import type { Tuser } from '$lib/types';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: Tuser;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
