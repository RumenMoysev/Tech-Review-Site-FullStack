export function saveUserData(userData) {
    sessionStorage.setItem('auth', userData.authToken)
    sessionStorage.setItem('email', userData.email)
    sessionStorage.setItem('username', userData.username)
    sessionStorage.setItem('userId', userData.userId)
}