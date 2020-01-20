# Set the working directory to here
cd "$(dirname "$0")"

# Pull code
git pull

# Built frontend
cd frontend
npm i
npm run build

# Restart backend
cd ../backend
docker-compose restart
