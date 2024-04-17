import axios from "axios";

export const explorePopularRepos = async (req, res) => {

  const { language } = req.params

  try {
    //5000 requests per hour for authenticated users
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const data = response.data;

    res.status(200).json({ repos: data.items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
