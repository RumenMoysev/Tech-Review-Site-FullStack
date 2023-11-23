import { useState } from "react";

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const sessionState = sessionStorage.getItem(key)

        if(sessionState) {
            return JSON.parse(sessionState)
        }

        return defaultValue
    })

    const setPersistedState = (value) => {
        setState(value)

        let stringifiedValue
        
        if(value instanceof Function) {
            stringifiedValue = JSON.stringify(value(state))
        } else {
            stringifiedValue = JSON.stringify(value)
        }

        sessionStorage.setItem(key, stringifiedValue)
    }

    return [state, setPersistedState]
}