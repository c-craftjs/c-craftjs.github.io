const cihuyUploadGithub = async (
  content,
  fileName,
  token,
  repoOwner,
  repoName,
  branch = "main"
) => {
  const githubApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileName}`;

  try {
    let existingFileResponse;
    try {
      existingFileResponse = await fetch(githubApiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!existingFileResponse.ok) {
        throw new Error(existingFileResponse.statusText);
      }
    } catch (error) {
      if (existingFileResponse.status === 404) {
        console.log("File not found. It will be created.");
      } else {
        throw error;
      }
    }

    const githubRequestBody = {
      message: "add new file",
      content: btoa(content),
      branch: branch,
    };

    const response = await fetch(githubApiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(githubRequestBody),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error uploading file to GitHub: ${error.message}`);
  }
};

export default cihuyUploadGithub;
