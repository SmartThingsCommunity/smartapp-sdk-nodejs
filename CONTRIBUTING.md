# Contributing

Thanks for contributing! Our community of developers is what put SmartThings on the map!

## How can I contribute?

### Improve documentation

As a user of the SmartApp SDK, you're the perfect candidate to help us improve our documentation. Error fixes, typo corrections, better explanations, more examples, etc. Open issues for things that could be improved – anything. Even improvements to this document.

### Give feedback on issues

We're always looking for more opinions on discussions in the issue tracker. It's a good opportunity to influence the future direction of this SDK.

### [Submitting an issue or feature request](/issues/new/choose)

- Search the issue tracker before opening an issue
- Ensure you're using the latest version
- Use a clear and descriptive title
- Include as much information as possible by filling out the issue template
- The more time you put into an issue, the more we will

### [Submitting a pull request](/compare)

- Non-trivial changes are often best discussed in an issue first, to prevent you from doing unnecessary work.
- For ambitious tasks, you should try to get your work in front of the community for feedback as soon as possible. Open a pull request as soon as you have done the minimum needed to demonstrate your idea. At this early stage, don't worry about making things perfect, or 100% complete. Add a `[WIP]` prefix to the title, and describe what you still need to do. This lets reviewers know not to nit-pick small details or point out improvements you already know you need to make.
- Don't include unrelated changes
- New features should be accompanied with tests and documentation
- Commit messages
  - Use a clear and descriptive title for the pull request and commits
  - We use [semantic-release](https://www.npmjs.com/package/semantic-release) to automatically generate release
    notes, versions and publish releases. This requires commit messages must be formatted properly using
    [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/). Our CI will check this and fail any PRs that are formatted incorrectly.
  - This repo is [commitizen friendly](https://github.com/commitizen/cz-cli), so you can use the `cz` cli to help create your commits.
- Lint and test before submitting the pull request by running `$ npm test`
- Write a convincing description of why we should land your pull request. Answer _why_ it's needed and provide use-cases.
- Make the pull request from a [topic branch](https://github.com/dchelimsky/rspec/wiki/Topic-Branches) (not master)
- You might be asked to do changes to your pull request. There's never a need to open another pull request – [just update the existing one.](https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md)

## [Finding contributions to work on](labels/help%20wanted)

Look at the existing issues for areas of contribution. Searching for issues labeled `help wanted` would be a great place to start.

---

## More about SmartThings

If you are not familiar with SmartThings, we have
[extensive on-line documentation](https://smartthings.developer.samsung.com/develop/index.html).

To create and manage your services and devices on SmartThings, create an account in the
[developer workspace](https://devworkspace.developer.samsung.com/).

The [SmartThings Community](https://community.smartthings.com/c/developers/) is a good place share and
ask questions.

There is also a [SmartThings reddit community](https://www.reddit.com/r/SmartThings/) where you
can read and share information.

## License and Copyright

Licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

Copyright 2019 SmartThings, Inc.
