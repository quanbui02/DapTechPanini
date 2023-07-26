@echo off

dotnet publish -c Release -o bin/Release/PublishOutput
docker build -f Dockerfile -t registry.gitlab.com/vansitv/dapfood/dapfood.api:1.0 .
docker push registry.gitlab.com/vansitv/dapfood/dapfood.api:1.0

curl -X POST http://103.226.250.207:9000/api/webhooks/9a625322-2bc4-4ab9-99f3-08c5221df87f

pause