FROM postgres:12

COPY db/init-db.sql /docker-entrypoint-initdb.d/