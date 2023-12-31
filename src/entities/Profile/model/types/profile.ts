import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	INCORRECT_AVATAR = 'INCORRECT_AVATAR',
	INCORRECT_CITY = 'INCORRECT_CITY',
	NO_DATA = 'NO_DATA',
	SEVER_ERROR = 'SEVER_ERROR'
}

export interface Profile {
	first?: string;
	lastname?: string;
	age?: number,
	currency?: Currency,
	country?: Country;
	city?: string,
	username?: string;
	avatar?: string;
}

export interface ProfileSchema {
	data?: Profile;
	form?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
	validateError?: ValidateProfileError[]
}
