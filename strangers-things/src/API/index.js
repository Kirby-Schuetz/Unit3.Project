
const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
// const POSTS_API_URL = "https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/posts"


export async function fetchAllPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("No posts today, you little hoarder.", error);
    }
  }

export async function createPost(title, description, price, location, username) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        price,
        location,
        username
      })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Sorry, we have too many things. Try again later.", error);
  }
}