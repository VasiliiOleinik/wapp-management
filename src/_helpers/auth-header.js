export default function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    const name = `Bearer ${user.token}`;
    return { Authorization: name };
  } else {
    return { Authorization: 'null' };
  }
}
