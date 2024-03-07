async function CihuyFileUploadGithub(
  content,
  fileName,
  githubToken,
  githubRepoOwner,
  githubRepoName,
  branchName = "main"
) {
  try {
    const githubApiUrl = `https://api.github.com/repos/${githubRepoOwner}/${githubRepoName}/contents/${fileName}`;
    const githubHeaders = {
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
    };

    // Check if the file exists before creating or updating
    let existingFileResponse;
    try {
      existingFileResponse = await fetch(githubApiUrl, {
        method: "GET",
        headers: githubHeaders,
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("File not found. It will be created.");
      } else {
        throw error;
      }
    }

    const githubRequestBody = {
      message: "add new file",
      content: Buffer.from(content).toString("base64"),
      sha: existingFileResponse
        ? (await existingFileResponse.json()).sha
        : undefined,
      branch: branchName,
    };

    const response = await fetch(githubApiUrl, {
      method: "PUT",
      headers: githubHeaders,
      body: JSON.stringify(githubRequestBody),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error uploading file to GitHub:", error.message);
    throw error;
  }
}

export { CihuyFileUploadGithub };
