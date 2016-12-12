cd style && ./build.sh && cd ..
ng build --prod
scp -r dist/* db:~/etreedb/etreedb.org/html
