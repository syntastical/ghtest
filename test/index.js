import { getInput } from '@actions/core'
import { getOctokit } from '@actions/github'

const octokit = getOctokit(getInput("GITHUB_TOKEN"));
const releases = await octokit.rest.repos.listReleases({owner: "replicatedhq", repo: "kots"});
console.log(releases);
