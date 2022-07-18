import { getInput } from '@actions/core'
import { getOctokit } from '@actions/github'

const owner = "replicatedhq";
const repo = "kots";

console.log(getInput("GITHUB_TOKEN").length)
const octokit = getOctokit(getInput("GITHUB_TOKEN"));
const releases = await octokit.rest.repos.listReleases({owner, repo});

for(const release of releases.data) {
  // if the release version isn't currently in our s3 then add it, else exit
  const assets = await octokit.rest.repos.listReleaseAssets({ owner, repo, release_id: release.id });
  console.log(assets.data.browser_download_url);

  // release.tag_name
}

// Release assets
// data: [
//   {
//     url: 'https://api.github.com/repos/replicatedhq/kots/releases/assets/71689460',
//     id: 71689460,
//     node_id: 'RA_kwDOC9pON84EReT0',
//     name: 'kotsadm-nominio.tar.gz',
//     label: '',
//     uploader: [Object],
//     content_type: 'application/gzip',
//     state: 'uploaded',
//     size: 487758727,
//     download_count: 0,
//     created_at: '2022-07-15T16:05:00Z',
//     updated_at: '2022-07-15T16:05:17Z',
//     browser_download_url: 'https://github.com/replicatedhq/kots/releases/download/v1.76.1/kotsadm-nominio.tar.gz'
//   },

// Releases
// data: [
// {
//   url: 'https://api.github.com/repos/replicatedhq/kots/releases/72105893',
//     assets_url: 'https://api.github.com/repos/replicatedhq/kots/releases/72105893/assets',
//   upload_url: 'https://uploads.github.com/repos/replicatedhq/kots/releases/72105893/assets{?name,label}',
//   html_url: 'https://github.com/replicatedhq/kots/releases/tag/v1.76.1',
//   id: 72105893,
//   author: [Object],
//   node_id: 'RE_kwDOC9pON84ETD-l',
//   tag_name: 'v1.76.1',
//   target_commitish: 'main',
//   name: 'v1.76.1',
//   draft: false,
//   prerelease: false,
//   created_at: '2022-07-15T13:38:00Z',
//   published_at: '2022-07-15T16:00:03Z',
//   assets: [Array],
//   tarball_url: 'https://api.github.com/repos/replicatedhq/kots/tarball/v1.76.1',
//   zipball_url: 'https://api.github.com/repos/replicatedhq/kots/zipball/v1.76.1',
//   body: '## Changelog\r\n' +
// '\r\n' +
// '* 6edc58600 chore: automate kubectl version pr (#2960)\r\n' +
// '* f74955b91 Merge pull request #2967 from replicatedhq/divolgin/sc-51184/check-for-update-results-in-your-license\r\n' +
// '* af2548966 Show available updates on the Version History page\r\n' +
// '* d51cdca72 Check for updates works from Dashboard in Helm mode\r\n' +
// '* f5e550aab Lock Minio version in E2E suite to prevent auto updating (#2970)\r\n' +
// '* 381ea355c Lock Minio version in E2E suite to prevent auto updating (#2969)\r\n' +
// '* 7dc32abac Merge pull request #2958 from replicatedhq/nickmeyer/sc-51778/improve-regression-test-cleanup-automation\r\n' +
// "* d60b62d1a fix detecting 'openShift' distribution in minimal rbac (#2959)\r\n" +
// '* 4de46fea2 address feedback\r\n' +
// '* 15dd99f28 add repository_dispatch trigger and adjust environment accordingly\r\n' +
// '* c0e8b71a1 Add workflow for cleaning up a single workspace [sc-51778]\r\n' +
// '* 9f519362a Merge pull request #2954 from replicatedhq/kiraboyle/sc-52368/cve-2021-38561\r\n' +
// '* 55331666d Merge pull request #2952 from replicatedhq/divolgin/sc-51321/kots-does-not-automatically-re-write-private\r\n' +
// '* e9c8c5863 Rianfowler/sc 52398/fix linting in kots web 3 (#2953)\r\n' +
// '* 5450e61fc update LVP to 0.3.6 to fix CVE-2021-38561\r\n' +
// '* 4d669f0cf Rianfowler/sc 52398/fix linting in kots web 2 (#2950)\r\n' +
// '* 5096cdd24 Rewrite images in all collectors that use images\r\n' +
// '* 8fdcc40d7 fix high severity CVE-2021-38561 in kurl_proxy\r\n' +
// '\r\n'
// },
