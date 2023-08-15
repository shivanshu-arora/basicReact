npm start
    Starts the development server.

npm run build
  Bundles the app into static files for production.

npm test
  Starts the test runner.

npm run eject
  Removes this tool and copies build dependencies, configuration files
  and scripts into the app directory. If you do this, you can’t go back!


UI designs: https://excalidraw.com/#room=c61beed162f88b9da764,Qh9t3rdD4yspztRBlmWaBQ

End-to-end express+db : https://levelup.gitconnected.com/creating-a-rest-api-with-node-js-and-express-a-step-by-step-guide-3bd7188fa219

docker commands:
sudo docker login --username irisplutonium@gmail.com --password docker@pluto123 
sudo docker pull irisplutonium/basic-react:v1.0
sudo docker run --expose 3306 -p 3306:3306 --name=mysql -v /home/shivangi/basicReact/db/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=plutonium -d irisplutonium/basic-react:v1.0
(-p would bind 3306 of container's port where sql runs to your localhost port and then --expose exposes the port
  -e would mount data stored in db/data in your project to container's var/lib/mysql so that everytime a new container is spinned off, it will mount data from your project to container and you need not reccreate the sql table and data)
)
sudo docker ps

mysql image commands:
to check password of mysql image: sudo docker inspect [container_image name] --format '{{json .Config.Env}}'
to get hold of the conatainer's bash: sudo docker exec -it mysql bash
to get hold of mysql db inside the container through bash: mysql -u root -p

creating a mysql docker container and running mysql in it: https://hevodata.com/learn/docker-mysql/#How_to_Install_the_Docker_MySQL_Container
