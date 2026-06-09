FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        asterisk \
        asterisk-core-sounds-en && \
    rm -rf /var/lib/apt/lists/*

COPY conf/ /etc/asterisk/

EXPOSE 5060/udp 5061/tcp

CMD ["asterisk", "-f", "-U", "asterisk"]