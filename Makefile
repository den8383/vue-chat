docker_compose_up:
	docker-compose up -d
docker_compose_exec:
	docker exec -it app-react_web_1 /bin/ash
docker_compose_prune:
	docker system prune
docker_compose_rm_all:
	docker rm -f `docker ps -a -q`

npx_create-react-app:
	npx create-react-app my-app
npm_run_build:
	npm run build
npm_start:
	npm start

open_browser:
	xdg-open http://0.0.0.0:3000

install_heroku:
	curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
path_heroku:
	echo 'PATH="/usr/local/heroku/bin:$(PATH)"' >> ~/.bashrc
heroku_login:
	heroku login --interactive
heroku_create:
	heroku create exampleapp$(shell whoami)$(shell date "+%Y%m%d")
