# set version
VERSION=1.0


# HELP

# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help


# DOCKER TASKS

# start
start: ## Start APP
	yarn start

# build
build: ## Build the APP
	yarn build

# dev
dev: ## Dev
	yarn dev

# make:release
make:release: ## make:release
	yarn make:release

# dist
dist: ## dist
	yarn dist


# HELPERS

# version
version: ## Output the current version
	@echo $(VERSION)