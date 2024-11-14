# Utiliser une image de base PHP avec Composer et les extensions nécessaires
FROM php:8.1-fpm

# Installer Composer et les dépendances de Laravel
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Copier les fichiers de l'application
COPY . /var/www

# Définir le répertoire de travail
WORKDIR /var/www

# Installer les dépendances via Composer
RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer && \
    composer install

# Donner les permissions
RUN chown -R www-data:www-data /var/www && \
    chmod -R 755 /var/www/storage

# Exposer le port de l'application
EXPOSE 8000

# Commande de démarrage
CMD php artisan serve --host=0.0.0.0 --port=8000
