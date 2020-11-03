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
Your commit messages format must follow a convention which is understood by `semantic-release`. By default `semantic-release` uses [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) but it can be changed by configuration.

Here is an example of the release type that will be done based on a commit messages:

| Commit message                                                                                                                                                                                   | Release type               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | Minor (Feature) Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | Major (Breaking) Release |

## Summary

Another alternative is [`go-semantic-release`](https://github.com/go-semantic-release/semantic-release).
