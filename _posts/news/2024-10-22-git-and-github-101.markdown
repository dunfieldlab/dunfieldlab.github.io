---
layout: post
title:  "Git and GitHub 101"
date:   2024-10-22 13:30:00 -0600
categories: news
featured: true
toc: true
tags: github tutorials code
--- 
{% include toc_include.html %} 

Git and GitHub often used interchangeably, but they are different tools and serve different purposes. Git tracks and stores the history of the changes we make in the files of our repository. GitHub is a service allowing us to publish our repositories online and collaborate effectively. Recently GitHub has been bought by Microsoft for a hefty sum of money and the deposited code was usesed to train the automatic programming AI - GitHub Copilot.
## Git software
Git is the most popular version control system dating back to the origins of Linux itself and used by all the big tech companies. As a consequence most linux systems, including WSL are already equipped with it. Git is a free and open source with lots and lots of documentations. One such resource is [the Pro Git book](https://github.com/toshimaru/jekyll-toc){:target="_blank"}, available for free, covering all the git aspects at a great depth. It also has links for some videos, tutorials and other, often free books. Speaking of good resources, **Stackoverflow** is another great place if you just want to get it done. Most common problems with git are likely to be already solved there.
* Git [https://stackoverflow.com/questions/tagged/git](https://stackoverflow.com/questions/tagged/git){:target="_blank"}
* GitHub [https://stackoverflow.com/questions/tagged/github](https://stackoverflow.com/questions/tagged/github){:target="_blank"}
* GitHub-Pages [https://stackoverflow.com/questions/tagged/github-pages](https://stackoverflow.com/questions/tagged/github-pages){:target="_blank"}
### Installing/updating Git if necessary
If git is not installed on your PC, or you'd like to get it updated, the official reference is a good place to start: [1.5 Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank"}
### Git Commands organization
Git commands are organized somewhat like Qiime2. First we type ```git``` followed by a **subcommand** and its parameters if necessary.
Typing one of the following in our terminal gives us the list of git subcommands:
```bash
git
git --help
```
We could get help, specific to a subcommand accordingly
```bash
git status -h # short version
git status --help # if you are inclined to read the Linux Git man-pages
```
### Basic Git configuration
These are typically done **once**, although they could be skipped and configured later.
There are three levels of configuration: system, global, and user. The system level is not often used, global configurations affect all repositories for a user, and are suitable for a personal PC. Local configurations are **specific to a repository**. To make the configurations local we just use the ```--local``` instead of the ```--global``` flag to our terminal command.
* Getting help
Git is super well documented. 
* User name
```bash
# will print our git user name
git config --global user.name
# will set our user name to Lionel Messi
git config --global user.name "Lionel Messi"
```
* User email
```bash
# will print our git user email
git config --global user.email
# will set our user email to Lionel Messi
git config --global user.email "lionelmessi@example.com"
```
* To view our current configs typically stored in ```~/.gitconfig``` we could
```bash
git config --list #all configs
git config --global --list #global configs
``` 
If we changed our mind or made a mistake we could interact with the ```git config``` command or edit ```~/.gitconfig``` directly. Deleting the file would remove all our settings.
* We could also set a default text editor. This could be used for editing commit messages and resolve conflicts. The default editor is **vim** which could be difficult, **nano** is another easy terminal editor, but it could be set to anything, really.
```bash
git config --global core.editor "nano"
```
Here is the [Stackoverflow page](https://stackoverflow.com/questions/2596805/how-do-i-make-git-use-the-editor-of-my-choice-for-editing-commit-messages){:target="_blank"} for editor config for different systems.
* Git aliases. Those could be super handy as they both could save on typing and from memorizing complicated commands.
The following command would give repository status in a short mode, and is five charactes shorter when we type.
```bash
git config --global alias.s "status -s"
```
Another good example is the alias for ```git log```. To make our logs more informative we could:
```bash
git log --oneline --all --graph --decorate
```
As the command is quite long we could make it much shorter by:
```bash
git config --global alias.lg "log --oneline --all --graph --decorate"
```
We will test our aliases shortly in the next section.
### Making, getting, and viewing repositories

To start using most of the Git commands we have to be in a Git repository. We could make any folder into a Git repository by:
#### Making new repos
```bash
git init
```
This creates in the current folder a subfolder ```.git``` containing all the repository internals.
#### Downloading existing repositories with Git

The most pupular command is: 
```bash
git clone /remote/repository/address
```
It downloads into the current local folder the entire remote repository.

If we'd like to download a remote repository at some defined stage, for example: commit, tag, or branch, we could use ```git fetch```. For example we could download our website up to a certain commit and try follow along with the code:

```bash
git fetch https://github.com/dunfieldlab/dunfieldlab.github.io.git
```

Having created a repository, we could run som git commands providing us with information. For example to display what files are **different** from from our *currrent* commit we could:
```bash
git s
# this is equivalent to
git status -s
```
To view our commit history:
```bash
git log
# or
git lg # this is equivalent to, if we created the alias above
git lg log --oneline --all --graph --decorate
```

#### Example 1
Let's make a git repo a new Jekyll website. In [our earlier tutorial]({% link _posts/news/2024-10-01-webdev1-install-jekyll-with-conda.markdown %}) we created a blank website in a ```my_website``` folder. Let's follow that example. To refresh, we've done the following:
{% highlight bash %}
jekyll new my_website
cd my_website
{% endhighlight %}
Jekyll made for us the following files and folders:
```
.gitignore
404.html
Gemfile
Gemfile.lock
_config.yml
_posts
about.markdown
index.markdown
```
Note, Jekyll also created a default ```.gitignore``` file, which we'll check out later.

Let's make this folder into a git repository; the command is the one we saw earlier:
```bash
git init
```
Now we have another folder, ```.git```, containing the file tracking information within the repo. Deleting ```.git``` would convert my_website to a regular folder and not a git repository.
```
.git
.gitignore
404.html
Gemfile
Gemfile.lock
_config.yml
_posts
about.markdown
index.markdown
```
Then if we try ```git status``` or ```git s```, we see something like the similar:
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        404.html
        Gemfile
        Gemfile.lock
        _config.yml
        _posts/
        about.markdown
        index.markdown
```
Git has successfully detected all the new files it detected. We'll add them to git in the next section.

#### Example 2
Let's view the repository for our own website.



### Making changes: 3-stage process
#### Ignoring files

### Discarding changes
This will restore the repo to the last commit removing all the uncommited and unstaged chages in our files.
This is useful if we'd like to test things out without making changes. This doesn't affect the staged files.
```bash
git restore .
```
If we added some files to a staging area and then decided to unstage them, this is the command:
```bash
git reset # or
git restore  --staged .
```
After we **have unstaged** them, we could ```git restore .``` to undo the changes.
This commands can also be more specific where we use a file/folder name(s) instead of ```.```.

How do we undo our git commits? Let's say we'd changed our mind and would like to undo the most recent commit, then the following command
```bash
git reset --hard HEAD~1
```
would return us to the state of a previous commit.
Here is [a great page](hhttps://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git){:target="_blank"} on discarding git commits.

### Navigating between commits
Navigating between commits is simple, but one has to be careful. Before we start, it's good to be in a clean state with no uncommitted/unstaged changes.

git checkout [the name of the sha]

You get the sha from doing

git log

Here you see me checking out the initial commit of a repository with hundreds of commits:

$ git checkout 772df05 #  Enough of the sha to be unique, often 6-8 chrs.
Note: checking out '772df05'.



You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

Again, in the detached HEAD state we have to be careful about modifying files, since it wouldn't affect the most recent commit and potentially could lead to commit conflicts.


If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b new_branch_name

HEAD is now at 772df05... Initial commit

Looks at files and then...

$ git checkout master

#### git diff

## GitHub

## GitHub Pages
https://stackoverflow.com/questions/53215356/jekyll-how-to-use-custom-plugins-with-github-pages
https://dev.to/davorg/deploying-github-pages-site-with-github-workflows-3bhh
https://pages.github.com/versions/
https://talk.jekyllrb.com/t/table-of-contents-displays-locally-but-not-on-github-pages/7860
## Troubleshooting and useful commands


