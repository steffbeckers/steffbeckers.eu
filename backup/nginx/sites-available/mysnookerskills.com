server {
    listen 80;
    listen [::]:80;
    server_name mysnookerskills.com www.mysnookerskills.com;
    return 301 https://www.mysnookerskills.com$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name www.mysnookerskills.com;

    ssl_certificate /etc/letsencrypt/live/mysnookerskills.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mysnookerskills.com/privkey.pem;
    # Turn on OCSP stapling as recommended at   
    # https://community.letsencrypt.org/t/integration-guide/13123 
    # requires nginx version >= 1.3.7
    ssl_stapling on;
    ssl_stapling_verify on;

    add_header Strict-Transport-Security "max-age=31536000";

    location / {
        proxy_pass http://127.0.0.1:2368;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}


server {
    listen 80;
    listen [::]:80;
    server_name app.mysnookerskills.com;
    return 301 https://app.mysnookerskills.com$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name app.mysnookerskills.com;

    ssl_certificate /etc/letsencrypt/live/mysnookerskills.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mysnookerskills.com/privkey.pem;
    # Turn on OCSP stapling as recommended at   
    # https://community.letsencrypt.org/t/integration-guide/13123 
    # requires nginx version >= 1.3.7
    ssl_stapling on;
    ssl_stapling_verify on;

    add_header Strict-Transport-Security "max-age=31536000";

    location / {
        proxy_pass http://127.0.0.1:2368;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
