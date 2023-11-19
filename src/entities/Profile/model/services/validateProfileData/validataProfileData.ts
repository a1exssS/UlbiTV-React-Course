import { Profile, ValidateProfileError } from '../../types/profile'

export const validataProfileData = (profile?: Profile) => {

	if (!profile) {
		return [ValidateProfileError.NO_DATA]
	}

	const { first,
		age,
		avatar,
		city,
		lastname,
		username
	} = profile

	const errors: ValidateProfileError[] = []

	if (!first || !lastname) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA)
	}
	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE)
	}
	if (!avatar) {
		errors.push(ValidateProfileError.INCORRECT_AVATAR)
	}
	if (!city) {
		errors.push(ValidateProfileError.INCORRECT_CITY)
	}

	return errors

}
