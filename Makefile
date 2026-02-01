.DEFAULT_GOAL := help

.PHONY: up
up: ## up
	docker compose up -d

.PHONY: down
down: ## down
	docker compose down

.PHONY: restart
restart: ## restart
	docker compose restart

.PHONY: build
build: ## build
	docker compose build --no-cache

.PHONY: ps
ps: ## ps
	docker compose ps

.PHONY: logs
logs: ## logs
	docker compose logs -f

.PHONY: bash
bash: ## bash
	docker compose exec app bash

.PHONY: run-app
run-app: ## run-app
	docker compose run --rm app bash

.PHONY: help
help: ## help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'