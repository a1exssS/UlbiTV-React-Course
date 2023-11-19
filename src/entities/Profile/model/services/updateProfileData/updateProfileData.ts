import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validataProfileData } from '../validateProfileData/validataProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (_, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi;

		const formData = getProfileForm(getState());

		const errors = validataProfileData(formData)

		if (errors.length) {
			return rejectWithValue(errors)
		}

		try {
			const response = await extra.api.put<Profile>('/profile', formData);

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue([ValidateProfileError.SEVER_ERROR]);
		}
	},
);
