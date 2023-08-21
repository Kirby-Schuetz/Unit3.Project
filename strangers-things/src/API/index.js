
const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export async function fetchAllPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("No posts today, you little hoarder.", error);
    }
  }


export async function createPost() {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({
      //   title: '',
      //   description: '',
      //   price: '',
      //   location: '',
      //   username: ''
      })
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Sorry, we have too many things. Try again later.", error);
  }
}

export async function createAccount() {
  try {
    const response = await fetch(
      `${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          // Authorization: `Bearer ${token}`,
        },
       
      });
      const result = await response.json();
      console.log(result)
      return(result.token)
  } catch (err) {
    console.error(err);
  }

}
export async function LogIn(){
  try {
    const response = await fetch(`${BASE_URL}/login`, {
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

// export async function Authenticate() {
//       try{
//         const token = await tokenProvider.getToken();

//           const response = await fetch(`${BASE_URL}`,
//           {
//               method: "GET",
//               headers: {
//                   "Content-Type": "application/json",
//                   Authorization: `Bearer ${token}`,
//               },
//           });
//           const result= await response.json()
//           console.log(result)
//           // setSuccessMessage(`Not only is ${result.data.username} ${result.message}, they also love to collect things.`)
//           // console.log(successMessage)
      
//           } catch(error) {
//           console.error(error);
//       }}