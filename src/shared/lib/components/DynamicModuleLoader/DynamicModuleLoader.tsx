import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { loginSchema } from 'features/AuthByUsername'
import React, { FC, ReactElement, Reducer, useEffect } from 'react'
import { useStore } from 'react-redux'

export type ReducersList = {
	[name in StateSchemaKey]?: any
}

type ReducersListEntry = [StateSchemaKey, any]

interface DynamicModuleLoader {
	reducers: ReducersList;
	children: ReactElement;
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoader> = ({ children, reducers, removeAfterUnmount }) => {

	const store = useStore() as ReduxStoreWithManager

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer)
		})

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
					store.reducerManager.remove(name)
				})
			}
		}
	}, [])

	return (
		<>
			{children}
		</>
	)
}
