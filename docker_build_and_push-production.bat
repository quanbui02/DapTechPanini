@echo off

docker build -f Dockerfile -t registry.gitlab.com/vansitv/dapfood/panini:prod-1.0 .
docker push registry.gitlab.com/vansitv/dapfood/panini:prod-1.0
 
 
 pause