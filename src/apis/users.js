async function IsUserExist(email) {
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

async function LoginUser(email, pwd) {
  // console.log('isUserExist called');
  console.log(email);
  console.log(pwd);
  try {
    const result = await fetch(
      `https://server-loginregister-reactapp.herokuapp.com/api/users/login?email=${encodeURIComponent(
        email,
      )}&pwd=${pwd}`,
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

async function CreateUser(name, email, pwd) {
  // console.log('isUserExist called');
  console.log(name);
  console.log(email);
  console.log(pwd);
  try {
    const result = await fetch(
      'https://server-loginregister-reactapp.herokuapp.com/api/users/create',
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          pwd: pwd,
        }),
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

export {CreateUser, IsUserExist, LoginUser};
