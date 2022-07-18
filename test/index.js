import { getInput } from '@actions/core'
import { getOctokit } from '@actions/github'

const octokit = getOctokit(getInput("GITHUB_TOKEN"));
const releases = await octokit.rest.repos.listReleases("replicatedhq", "kots");
console.log(releases);
