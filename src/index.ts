export function advanceLogger(message: string) {
    console.log(`Message => ${message}` , "TEST")
}

export const ENV = import.meta.env.VITE_APP_ENV