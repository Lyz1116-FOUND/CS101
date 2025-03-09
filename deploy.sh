
# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'fdutristin.github.io/COMP101 > CNAME

git init
git add -A
git commit -m 'deploy'

# # 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:fduTristin/fduTristin.github.io.git

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:fdutristin/COMP101-test.git master:gh-pages

cd -