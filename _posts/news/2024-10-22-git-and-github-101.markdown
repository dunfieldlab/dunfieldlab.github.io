---
layout: post
title:  "Git and GitHub 101"
date:   2024-10-22 13:30:00 -0600
categories: news
featured: true
tags: github tutorials code
--- 

Git and GitHub often used interchangeably, but they are different tools and serve different purposes. Git tracks and stores the history of the changes we make in the files of our repository. GitHub is a service allowing us to publish our repositories online and collaborate effectively. Recently GitHub has been bought by Microsoft for a hefty sum of money and the deposited code was usesed to train the automatic programming AI - GitHub Copilot. GitHub Pages, on the other hand, offers a free free GitHub hosting and integration service for a Jekyll project.
## Git software
Git is the most popular version control system dating back to the origins of Linux itself and used by all the big tech companies. As a consequence most linux systems, including WSL are already equipped with it. Git is a free and open source with lots and lots of documentations. One such resource is [the Pro Git book](https://git-scm.com/book/en/v2){:target="_blank"}, available for free, covering all the git aspects at a great depth. It also has links for some videos, tutorials and other, often free books. Speaking of good resources, **Stackoverflow** is another great place if you just want to get it done. Most common problems with git are likely to be already solved there.
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

To start using most of the Git commands we have to be in a Git repository. 

#### Making new repos
We could make any folder into a Git repository by:
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
git lg # this is equivalent to the following ( if we created the alias above)
git log --oneline --all --graph --decorate
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
```bash
git clone https://github.com/dunfieldlab/dunfieldlab.github.io.git
```
This will download the website project in a current folder. We could rename the repo folder manually to something else, or we could change the name during clone as:
```bash
git clone git@github.com:dunfieldlab/dunfieldlab.github.io.git my_new_website
```
Here we have a lot of commits so after changing to the repository we could explore commit history by:
```bash
git log #or
git lg
```

### 3-stage process of making changes: git add, git commit, git push
With git we coudl distinguish a 3-stage process to adding things. It might sould excessive but it has its benefits.
However, before doing that, it is a good general habit to bring possible remote changes locally **before** we start working on a remotely shared repository.
```bash
git pull origin master #or
git pull 
```
This ensures we have latest version of a repo and minimizes potential merge conflicts.
#### Adding to a staging area: git add
Staging area tracks the files about to be commited, this is like a shopping cart. Here we can select/unselect files that we are going to commit. If we are in our ```my_website``` folder
```bash
git add .
```
Will add all files to our staging area.
We could also add specific files or folders, for example:
```bash
git add _config.yml
git add *.markdown #add all markdown files in the current folder
git add about.markdown index.markdown #this is equivalent to the above
git add _posts #add posts folder, and so on
```
#### Making a commit: git commit
After we have files in our staging area, if we are happy with the changes we could commit the files from our staging area by
```bash
git commit -m "initial jekyll site"
```
Each commit will have a uinique SHA has sum, and we also have to provide a commit message. It's helpful to give informative messages. Having commited changes after typing ```git status``` we expect to see:
```
On branch main
nothing to commit, working tree clean
```
#### Sharing our changes with a remote repository: git push
We could push one or more commits to a remote repository with ```git push```. In some cases, we have to specify a remote repository and a specific branch, co the command often becomes ```git push origin main```. We will see this in more details in the section on GitHub [below](#github).
### Ignoring files
Our ```.gitignore``` files contains files and folders to be excluded from tracking by git. It's useful to exclude temporary or chache files, or anything else we don't have to sync. In case of a Jekyll project, a good candidate is a compiled ```_site``` folder. If  ```.gitignore``` is missing we could always create it by ```touch .gitignore``` and modify in any text editor. A Jekyll project is provided with a ```.gitignore``` with the following contents:
```bash
$ cat .gitignore 
_site
.sass-cache
.jekyll-cache
.jekyll-metadata
vendor
```
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
Here is [a great page](hhttps://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git){:target="_blank"} describing discarding git commits in more depth.

### Navigating between commits
Navigating between commits is simple, but one has to be careful. Before we start, it's good to be in a clean state with no uncommitted/unstaged changes. Also, it is a good practice to commit/discard any changes before any restructuing our git repository.
```bash
git checkout [the name of the sha hash sum]
```
We've seen our sha hash sums from ```git log``` or ```git lg```

Doing this brings us into a 'detached HEAD' state, when our current position is behind the most recent chagnes. We could explore the code and even make changes.
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout. After we could return back to our HEAD state by:
```bash
git checkout main
```
## GitHub
### SSH keys
GitHub no longer has username/password access, so before we start interacting with the system we should make SSH keys. If we go to our GitHub account settings in the upper right corner, click on "SSH and GPG keys"
![](/images/GitHubSSH_keys.png){: .himgcenter style="width:15%"}. Here we could start adding our **public** keys. If we work on different computers we could add a key for each of them.

Let's create our GitHub private/public SSH key pair first.
```bash
ssh-keygen -t ed25519 -C "your-github-email@example.com"
```
It's good to enter a passphrase, if we leave the filenames empty, it'll create us the following SSH key pair in our ~/.ssh folder: id_ed25519 and id_ed25519.pub. Do not share the private key. On GitHub we'll use our public key id_ed25519.pub. Click on "New SSH key" and enter the contents of id_ed25519.pub. You could copy it from the output of the following command:
```bash
cat ~/.ssh/id_ed25519.pub
```
A more advanced (optional) usage could involve a specific key for a given repository. For example if we are on a shared computer. A strong passphrase is crucial in this case. To link our repo to a specific key, we use the **private** key, but share on GitHub its public (.pub) counterpart as above.
```bash
git config --add --local core.sshCommand 'ssh -i <PATH_TO_SSH_PRIVATE_KEY>'
```
### GitHub repository
After registering on GitHub we can create a new repositroy, generealy it should have the same name as our local repo. On your GitHub home page click on "Create new" in the upper right corner.
![](/images/GitHubCreateNew.png){: .himgcenter style="width:40%"}. After click on "New repository" and give it a name, ```my_website```, for example. It's easier if we create an *empty* repository without Readme or other content. We could add those later.

Then GitHub brings us to a Quick setup page for the repo. Here we could choose HTTP or SSH url so we could follow the instructions under "…or push an existing repository from the command line" provided below. **IMPORTANT: ** We have to choose SSH url for our SSH keys to work. It will be something like this in our case: ```git@github.com:YOUR-GITHUB-USERNAME/my_website.git```

Then we could add this remote GitHub repository to our **local** git repo.
```bash
git remote add origin git@github.com:YOUR-GITHUB-USERNAME/my_website.git`
```
We could bring the remote changes locally (nothing in this case as it is an empty repo) with
```bash
git pull origin master
```
And  having set up our remote url that we could push our local commits to our remote location with:
```bash
git push origin master
```
We could delete our GitHub repository by going to its page, clicking "Settings", scrolling to the bottom and clicking "Delete this repository"
## GitHub Pages
Everything is ready now to try to host our Jekyll website online. It could be a new project, or even a copy of this website. There are several ways of doing it, the most straightforward, in my opinion, is the following:
1. Create a local repository named your_github_user_name.github.io and commit all changes.
2. Create an **empty** GitHub repository with the same name.
3. Push the local repository to GitHub.
4. Go to your repository's Settings Tab>Pages>Deploy from a branch
   1. Select which branch to use (typically main)
   2. Select folder: / (root)
   
![](/images/GitHubPages.png){: .himgcenter style="width:50%"}

Maybe in the next section we could share some useful commands, and common use-cases and solutions for Git-GitHub-GitHub Pages.

## Troubleshooting and useful commands


