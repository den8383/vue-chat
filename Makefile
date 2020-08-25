docker_compose_up:
	docker-compose up -d
docker_compose_exec:
	docker exec -it vue_chat_vue-cat_1 sh
docker_compose_prune:
	docker system prune
docker_compose_rm_all:
	docker rm -f `docker ps -a -q`

vue_create-app:
	vue create sample-chat
vue_add_lib_vuetify:
	vue add vuetify

open_browser:
	xdg-open http://0.0.0.0:1234

install_heroku:
	curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
path_heroku:
	echo 'PATH="/usr/local/heroku/bin:$(PATH)"' >> ~/.bashrc
heroku_login:
	heroku login --interactive
heroku_create:
	heroku create exampleapp$(shell whoami)$(shell date "+%Y%m%d")
