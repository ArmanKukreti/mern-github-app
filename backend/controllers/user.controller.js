import axios from 'axios';

export const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;

  try {
    //60 requests per hour, 5000 requests per hour for authenticated requests
    const userRes = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const userProfile = userRes.data;

    const repoRes = await axios.get(userProfile.repos_url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repos = repoRes.data;
    

    res.status(200).json({ userProfile, repos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
