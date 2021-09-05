export async function isUserExist(email) {
  // console.log('isUserExist called');
  console.log(email);
  try {
    const result = await fetch(
      `https://server-loginregister-reactapp.herokuapp.com/api/users/exist?email=${encodeURIComponent(
        email,
      )}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // params: JSON.stringify({
        // email: email,
        // }),
      },
    );
    const json = await result.json();
    // console.log('isUserExist json');
    console.log(json);
    return json;
  } catch (e) {
    return {
      success: false,
      message: e.message,
    };
  }
}