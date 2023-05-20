echo "start build..."

npm run build

echo "finished build."
echo "start copying files to a server..."

scp -i ~/.ssh/frankfurt-google.pub -r build/* beksdeveloper@34.65.179.105:/var/www/polytech/

echo "Done!"