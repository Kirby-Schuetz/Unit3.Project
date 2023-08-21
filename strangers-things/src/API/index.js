
const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyNGQ1NDJjMjc1MDAwMTQ4YmZkNGYiLCJ1c2VybmFtZSI6Inl1cmkiLCJpYXQiOjE2OTI2Mzc3MTR9.RDeFQEPobSPHfCD-1k5cUzTMIVWhfs6X_D1Ph1ONHj4"


export async function fetchAllPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("No posts today, you little hoarder.", error);
    }
  }


export async function createPost(postDetails) {
  try {
    const requestBody = {
      "post": postDetails
    };
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Sorry, we have too many things. Try again later.", error);
  }
}

export async function createAccount(user) {
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const result = await response.json();
      console.log(result);
      // return(result.token)
  } catch (err) {
    console.error(err);
  }

}
export async function LogIn(){
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method:"POST",
      headers: {
        'Content-Type':  'application/json'
        // Authorization: `Bearer ${token}`,

      },
    });
  const result = await response.json();
  console.log(result)
  return (result.token)
  } catch(err){
    console.error(err);
  }
}



export async function deletePost() {
  try {
    const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
      method: "DELETE",
      headers: {
        'Content-Type':  'application/json',
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function editPost() {
  try {
    const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
      method: "PATCH",
      headers: {
        'Content-Type':  'application/json',
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}