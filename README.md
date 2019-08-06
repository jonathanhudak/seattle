cool! wp for back and nextjs for front

## Prereq

1. Install Docker
2. Install mkcert for local https development

- `brew install mkcert`
- `mkcert -install`

### Install certificate for local HTTPS

1. `mkdir certs && cd $_`
2. `mkcert yourdomain.test`
3. `mv ./yourdomain.test.pem ././yourdomain.test.crt`
4. `mv ./yourdomain.test-key.pem ././yourdomain.test.key`
5. `sudo vi /etc/hosts/`
   a. Add your domain `127.0.0.1 localhost yourdomain.test`

## Dev

1. `docker-compose up`

## Prod

_None setup yet_

### Install Docker on Ubuntu 18x

```
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
sudo systemctl status docker
```

#### References

- https://codewithhugo.com/docker-compose-local-https/
