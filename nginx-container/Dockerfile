FROM nginx:1.15.2

RUN rm /etc/nginx/nginx.conf

# Change nginx configuration file 
COPY nginx.conf /etc/nginx/
COPY /data/certs/. /etc/nginx/ssl/

RUN chmod 700 /etc/nginx/ssl

WORKDIR /etc/nginx/ssl
RUN ls -l