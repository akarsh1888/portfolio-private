# !/bin/bash

# Find and remove node_modules directories
sudo find . -type d -name "node_modules" -exec rm -rf {} \;

# Find and remove package-lock.json files
sudo find . -type f -name "package-lock.json" -exec rm -f {} \;
sudo npm cache clean --force
