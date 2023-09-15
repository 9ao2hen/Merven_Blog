#!/bin/sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git config --local http.proxy socks5://127.0.0.1:1080
git config --local https.proxy socks5://127.0.0.1:1080
git add -A
git commit -m 'deploy'

git push -f https://github.com/9ao2hen/Merven_Blog.git main:github-pages

cd -