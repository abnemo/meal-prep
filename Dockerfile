FROM nginx
COPY dist/meal-prep /usr/share/nginx/html
COPY .kubernetes/default.conf /etc/nginx/conf.d/default.conf