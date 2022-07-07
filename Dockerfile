FROM mysql:5.7
LABEL version="5.7" main:maintener="user@gmail.com"
ENV MYSQL_ROOT_PASSWORD="root"
ENV MYSQL_DATABASE="test"
ENV MYSQL_ROOT_HOST=%

CMD ["--default-authentication-plugin=mysql_native_password"]

