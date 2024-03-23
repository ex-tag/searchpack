# ----------
# Build commands
# ----------
install-frontend:
	@echo "Installing browser-side dependencies...";
	@npm install;

update-frontend:
	@echo "Updating browser-side dependencies...";
	@npm outdated | sed '1d; s/ .*/@latest/' | \
		xargs npm install --save-exact;
# @npx --yes npm-check-updates --upgrade;

update-backend:
	@echo "Updating server-side dependencies...";
	@cargo upgrade;

run-development:
	@npm run start;

build-local-production:
	@npm run make;
