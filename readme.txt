create a git repo:
git init

set origin alias(if init locally and not cloned):
git remote add origin [url]

see remote origin:
get remote -v

pull(always pull before starting):
git pull origin [branch name]

status of git:
git status

see logs of commits:
git log or git log --oneline


checkout commit:
git checkout [commit id]
get checkout master (go back to the master branch)

revert:
git rever [commit id]

go back in time(keeps changed made in editor):
git reset [commit id] (add --hard to remove changes)

add files to be commited:
git add .

remove files to be commited:
git rm --cached index.html

then we commit:
git commit -m "blabla"

then we push:
git push origin


create branch:
git branch [name]

see branches:
git branch -a

change branch:
git checkout [name]

delete branch:
git branch -d [name](only works if merged)
git branch -D [name]

create branch plus enter it:
git checkout -b [branch name]

to merge:
git checkout master
git merge [branch name]

if conflict:
git merge [branch name]
git add .
git commit

push:
git push origin [branch name]