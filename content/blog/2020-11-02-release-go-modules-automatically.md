---
title: Release Go modules automatically
date: 2020-11-02
tags: ["Golang"]
excerpt: I write about how to release a Go module automatically via semantic-release and Github Actions. I also include how to handle pre-releases.
---

If you happen to have some awesome Golang codes, you probably want to share it with others. Once sharing it, you will need to turn it into a [Go module](https://golang.org/ref/mod) and to version it. Therefore it can be managed easier and to be more friendly to users.

Well, releasing a Go module isn't so difficult but neither it is straightforward. Moreover, you're an engineer so you want to automate everything including this manual work.

Below is my experience when trying to automate the process of releasing Go modules via [`semantic-release`](https://github.com/semantic-release/semantic-release) and Github Actions. It wasn't so smooth but life is much easier after that.

## Prerequisites

### Commit message format

Our commit messages format must follow a convention which is understood by `semantic-release`. By default `semantic-release` uses [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) but it can be changed by configuration.

Here is an example of the release type that will be done based on a commit messages:

| Commit message                                                                                                                                                                                   | Release type             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release            |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | Minor (Feature) Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | Major (Breaking) Release |

### Automated tests

We all want our modules are released with its best in quality. The only way to achieve that is to take testing seriously. Since releasing is done automatically, so be testing. Therefore, I would assume tha CI is already implemented with a proper automated testing. And we will only trigger the release step if all test cases are passed.

## Setup semantic-release

### Configuration

For Node modules, we can straightly use the default configuration. For Go modules, it requires some modifications. Thus, we will need to add `.releaserc.json`, which is `semantic-release`'s configure file to the root folder in our repository:
```json
{
  "branches": [
    "main",
    {
      "name": "beta",
      "prerelease": true
    }
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
}
```
There are few things I would like to highlight here:

- `@semantic-release/npm` is removed from the default `plugins` config because we don't need to publish our Go module to NPM repo. It's obvious, right?
- `main` is used instead of `master` which is the release branch by default. For those who may not know, Github recently renames the default branch from `master` to `main`. [Reference](https://github.com/github/renaming).
- `beta` is used for pre-release branch when we in heavy development phase with frequent breaking changes. To learn more about release workflow, you can look into [`semantic-release` wiki](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration). I'm really impressed by how well it's documented.

For generating changelog, we will need to include two more plugsin:
- [`@semantic-release/changlog`](https://github.com/semantic-release/changelog): to generate the changelog file. By default, it's `CHANGELOG.md`.
- [`@semantic-release/git`](https://github.com/semantic-release/git): to commit the generated changelog file to the repository.

I don't see `CHANGELOG.md` to scale well and we already have git history so not including these steps make things easier.

## Pre-releases

TBD

## Summary

Another alternative is [`go-semantic-release`](https://github.com/go-semantic-release/semantic-release).
