# dhbw-ka-website (working title)

An informational website for aspiring students with everything about the city of Karlsruhe.

Although this website has clearly been written with vocational training students (studying at DHBW or similar institutions) in mind, parts of the site are expected to be useful for all young people that moved to the city of Karlsruhe; even if they didn't do so for any kind of educational reason whatsoever.

# getting started

## setting the repository up

This repository uses _Git LFS_ to store large binary files such as images and fonts.

### using the git cli

To clone the project properly, please make sure that [_Git_](https://git-scm.com/) and [_Git LFS_](https://git-lfs.github.com/) are installed.

To check whether you meet the requirements, open a command line prompt and execute the following command:

```shell
git config --list
```

Check whether the configuration includes properties starting with `filter.lfs`.
If that's the case, git lfs is installed, and you can clone the repository as usual.
If not, please install git lfs before trying again.
If the command is not available at all, please install git first.

### using GitHub Desktop

If you prefer a user-friendly UI over a CLI, you're presumably better off using [GitHub Desktop](https://desktop.github.com/).
As it comes with built-in Git LFS support, you're good to go.
Just open the application and clone this repository to a directory of your choice.

## configuring the project

Further instructions on how to configure an individual component are available in the component's subdirectory.
